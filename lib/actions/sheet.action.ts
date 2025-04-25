'use server'

import { google } from 'googleapis'
import { sendMail } from './email.action'
import { IEmailAppendData, IEmailGetSheet } from '../model/mail.type'

const privateKey = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
const clientEmail = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL
const spreadsheetId = process.env.NEXT_PUBLIC_TALK_TO_EXPERT_GOOGLE_SHEET_ID

const mailServer = process.env.NEXT_PUBLIC_MAIL_SERVER
const mailServerName = process.env.NEXT_PUBLIC_MAIL_SERVER_NAME
const recipientsConfig = JSON.parse(process.env.NEXT_PUBLIC_RECIPIENTS || '[]')
const recipients = [...recipientsConfig, 'thinhdoan@poetadigital.com']

export const getSheetsData = async ({ range }: IEmailGetSheet) => {
  try {
    if (!privateKey || !clientEmail || !spreadsheetId) {
      throw new Error('Missing required environment variables')
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range
    })

    return res.data.values // Return values directly for further processing
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error)
    throw error // Rethrow to handle appropriately in the caller
  }
}

export const addSheetData = async ({ range, data, subject = '', html = '' }: IEmailAppendData) => {
  try {
    if (!privateKey || !clientEmail || !spreadsheetId) {
      throw new Error('Missing required environment variables')
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Write row(s) to spreadsheet
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range, // Specify the sheet/tab name (e.g., "Sheet1")
      valueInputOption: 'RAW', // Use 'RAW' to insert data as-is or 'USER_ENTERED' for data interpretation
      insertDataOption: 'INSERT_ROWS', // Ensures rows are added instead of overwriting
      requestBody: {
        values: data // Data to append: must be a 2D array
      }
    })

    if (res.data) {
      await sendMail({
        from: `${mailServer} <${mailServerName}>`,
        to: recipients,
        subject,
        html
      })

      return {
        data: res.data
      }
    }
  } catch (error) {
    return {
      status: 'error',
      data: null,
      error: error
    }
  }
}

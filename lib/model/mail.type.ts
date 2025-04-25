export interface IEmailStandard {
  range: string
}

export interface IEmailSender {
  from: string
  to: string[]
  subject: string
  html: string
}

export interface IEmailAppendData extends IEmailStandard, Partial<IEmailSender> {
  data: string[][]
}

export interface IEmailGetSheet extends IEmailStandard {}

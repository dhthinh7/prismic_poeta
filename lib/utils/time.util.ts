import moment from 'moment-timezone'

interface ITimeBase {
  timeZoneId?: string
  format?: string
}

interface IStringToHumanTime extends ITimeBase {
  date: string | Date
}

class TimeUtil {
  public convertStringToHumanTime = ({
    date,
    format = 'hh:mm a',
    timeZoneId = moment.tz.guess()
  }: IStringToHumanTime) => {
    if (!date) return ''

    const newDate = moment(date)
    const dateTz = newDate.tz(timeZoneId).format(format)

    return dateTz
  }
}

export const timeUtil = new TimeUtil()

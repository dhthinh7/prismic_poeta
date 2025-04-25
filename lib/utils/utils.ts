class Utils {
  /**
   * Checks if an object is empty (has no keys).
   * @param objectData - The object to check.
   * @returns `true` if the object is empty, otherwise `false`.
   */
  public isObjectEmpty(objectData: Record<string, unknown>): boolean {
    return objectData && Object.keys(objectData).length > 0
  }

  public generateDateTime(): string {
    const now = new Date()

    const day = now.getDate()
    const month = now.getMonth() + 1 // Months are zero-indexed
    const year = now.getFullYear()

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    const _day = day < 10 ? `0${day.toString()}` : day.toString()
    const _month = month < 10 ? `0${month.toString()}` : month.toString()
    const _hours = hours < 10 ? `0${hours.toString()}` : hours.toString()
    const _minutes = minutes < 10 ? `0${minutes.toString()}` : minutes.toString()
    const _seconds = seconds < 10 ? `0${seconds.toString()}` : minutes.toString()

    return `${_month}/${_day}/${year} ${_hours}:${_minutes}:${_seconds}`
  }

  public hexToRgba(hex: string, opacity: number) {
    // Remove the '#' if present
    hex = hex.replace(/^#/, '')

    // Parse r, g, b values
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    // Return RGBA string
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }
}

export const utils = new Utils()

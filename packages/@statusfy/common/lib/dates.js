const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')

const logger = require('./logger')

dayjs.extend(utc)

export default () => {
  return {
    addLocales(extraLangs) {
      if (extraLangs && extraLangs.length > 0) {
        extraLangs.forEach(l => dayjs.locale(l))
      }
    },
    format(date, template, locale = 'en') {
      return dayjs.utc(date).locale(locale).format(template)
    },
    parse(inputDate) {
      const date = inputDate ? inputDate : new Date()
      return dayjs.utc(date)
    },
    range(start, end, by = 'day') {
      const startDate = this.parse(start)
      const endDate = this.parse(end)
      let dates = []
      let diff = {};

      if (endDate.diff(startDate) < 0) {
        logger.fatal('End Date must be greater than Start Date')
        process.exit(0)
      }

      if (by === 'day') {
        const startD = startDate.startOf('day');
        const endD = endDate.startOf('day');

        diff.day = endD.diff(startD, 'day', true)
        dates.push(startD)

        for (let i = 1; i <= diff.day; i++) {
          dates.push(startD.add(i, 'day'))
        }
      } else if (by === 'month') {
        const startM = startDate.startOf('month');
        const endM = endDate.startOf('month');

        diff.month = endM.diff(startM, 'month', true)
        dates.push(startM)

        for (let i = 1; i <= diff.month; i++) {
          dates.push(startM.add(i, 'month'))
        }
      }

      return {
        diff,
        dates
      }
    }
  }
}

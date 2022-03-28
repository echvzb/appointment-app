import moment from 'moment';

export const makeCalendarHeaderData = (date: Date) => {
  const firstDay = moment(date).subtract(date.getDay(), 'days');
  const days = [];
  for (let i = 0; i < 7; i++) {
    const currentDay = moment(firstDay).add(i, 'days');
    days.push({
      name: currentDay.format('ddd'),
      date: currentDay.date(),
    });
  }
  const month = moment(date).format('MMMM');
  const year = moment(date).format('YYYY');
  return {days, month, year};
};

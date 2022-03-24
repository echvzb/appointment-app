import {useContext, useState} from 'react';
import {CalendarContext} from '../../Calendar.context';
import {makeCalendarHeaderData} from './CalendarHeader.utils';

export const useCalendarHeader = () => {
  const {
    dateState: [date, setDate],
  } = useContext(CalendarContext);
  const [calendarHeaderData, setCalendarHeaderData] = useState(
    makeCalendarHeaderData(date[0]),
  );
  const handleChangeDate = ({date}: {date: Date | Date[]}): void => {
    const isDateArray = Array.isArray(date);
    setDate(isDateArray ? date : [date]);
    setCalendarHeaderData(makeCalendarHeaderData(isDateArray ? date[0] : date));
  };
  return {
    date,
    handleChangeDate,
    calendarHeaderData,
  };
};

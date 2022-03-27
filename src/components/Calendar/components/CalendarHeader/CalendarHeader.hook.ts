import {useContext, useState} from 'react';
import {CalendarContext} from '../../Calendar.context';
import {makeCalendarHeaderData} from './CalendarHeader.utils';

export const useCalendarHeader = () => {
  const {
    dateState: [date, setDate],
    timeState: [time, setTime],
  } = useContext(CalendarContext);
  const [calendarHeaderData, setCalendarHeaderData] = useState(
    makeCalendarHeaderData(date[0]),
  );
  const handleDateChange = ({date}: {date: Date | Date[]}): void => {
    const isDateArray = Array.isArray(date);
    setDate(isDateArray ? date : [date]);
    setCalendarHeaderData(makeCalendarHeaderData(isDateArray ? date[0] : date));
  };
  const handleTimeChange = (time: Date): void => {
    setTime(time);
  };
  return {
    time,
    date,
    handleDateChange,
    handleTimeChange,
    calendarHeaderData,
  };
};

import {useContext, useState} from 'react';
import {CalendarContext} from '../../Calendar.context';
import {makeCalendarHeaderData} from './CalendarHeader.utils';
import type {HandleDateChangeInterface} from './CalendarHeader.types';

export const useCalendarHeader = () => {
  const {
    dateState: [date, setDate],
  } = useContext(CalendarContext);
  const [calendarHeaderData, setCalendarHeaderData] = useState(
    makeCalendarHeaderData(date[0]),
  );
  const handleDateChange = (params: HandleDateChangeInterface | Date): void => {
    if (params instanceof Date) {
      setDate([params]);
    } else {
      const {date} = params;
      const isDateArray = Array.isArray(date);
      setDate(isDateArray ? date : [date]);
      setCalendarHeaderData(
        makeCalendarHeaderData(isDateArray ? date[0] : date),
      );
    }
  };
  return {
    date,
    handleDateChange,
    calendarHeaderData,
  };
};

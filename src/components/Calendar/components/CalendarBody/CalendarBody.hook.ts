import {useContext, useEffect} from 'react';
import {useQuery} from 'react-query';
import {useParams} from 'react-router';
import {getCalendar} from '../../Calendar.requests';
import {CalendarContext} from '../../Calendar.context';

export const useCalendarBody = () => {
  const {
    dateState: [date],
  } = useContext(CalendarContext);
  const {userId} = useParams();
  const {data, refetch} = useQuery('getCalendar', () =>
    getCalendar(userId, date[0].toISOString().slice(0, 10)),
  );
  useEffect(() => {
    refetch();
  }, [date]);
  return {data};
};

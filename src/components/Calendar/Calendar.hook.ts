import {useState, useEffect} from 'react';
import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom';
import {getUserById, getCalendar} from './Calendar.requests';
import type {UserByIdInterface} from './Calendar.types';

export const useCalendar = () => {
  const [date, setDate] = useState<Date[]>([new Date()]);
  const {userId} = useParams();
  const {isSuccess, data} = useQuery('getUserById', () => getUserById(userId));
  const {
    refetch: calendarRefetch,
    data: calendarData,
    isLoading: isCalendarLoading,
  } = useQuery(
    'getCalendar',
    () => getCalendar(userId, date[0].toISOString().slice(0, 10)),
    {enabled: false},
  );
  const [profile, setProfile] = useState<UserByIdInterface>(null);

  const handleChangeDate = ({date}: {date: Date | Date[]}): void => {
    setDate(Array.isArray(date) ? date : [date]);
  };
  useEffect(() => {
    if (isSuccess && data) {
      const unknownData = data as unknown;
      const user = unknownData as UserByIdInterface;
      setProfile(user);
    }
  }, [isSuccess, data]);
  useEffect(() => {
    if (isSuccess) {
      calendarRefetch();
    }
  }, [date, isSuccess]);
  return {
    profile,
    date,
    handleChangeDate,
    calendarData,
    isCalendarLoading,
  };
};

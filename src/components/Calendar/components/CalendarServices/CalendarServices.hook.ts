import {ChangeEvent, useContext, useState} from 'react';
import {useQuery} from 'react-query';
import {getUserServices} from './CalendarServices.requests';
import {CalendarContext} from '../../Calendar.context';

export const useCalendarServices = () => {
  const {
    userId,
    userServiceState: [, setUserServiceContext],
  } = useContext(CalendarContext);
  const [userServiceId, setUserServiceId] = useState('');
  const {data, isSuccess} = useQuery(
    'getUserServices',
    () => getUserServices(userId),
    {
      enabled: !!userId,
    },
  );
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUserServiceId(event.target.value);
  };
  const handleSubmit = () => {
    setUserServiceContext(
      [].concat(data).find(({_id}) => _id === userServiceId),
    );
  };
  return {data, isSuccess, handleChange, userServiceId, handleSubmit};
};

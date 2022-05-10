import {useState, useEffect, useContext} from 'react';
import {useQuery, useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';
import {CalendarContext} from './Calendar.context';
import {createEvent, getUserById} from './Calendar.requests';
import type {UserByIdInterface} from './Calendar.types';

export const useCalendar = () => {
  const {
    userId,
    userServiceState: [userService],
    dateState: [date],
  } = useContext(CalendarContext);
  const {isSuccess, data} = useQuery('getUserById', () => getUserById(userId));
  const [profile, setProfile] = useState<UserByIdInterface>(null);
  const {
    mutateAsync,
    isSuccess: isCreateEventSuccess,
    isLoading: isCreateEventLoading,
  } = useMutation(createEvent);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess && data) {
      const unknownData = data as unknown;
      const user = unknownData as UserByIdInterface;
      setProfile(user);
    }
  }, [isSuccess, data]);
  const handleSubmit = async () => {
    const [d] = date;
    try {
      await mutateAsync({
        userId,
        date: `${d
          .toISOString()
          .slice(0, 10)}T${d.getHours()}:${d.getMinutes()}`,
        serviceId: userService._id,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleExit = () => {
    navigate('/');
  };
  return {
    profile,
    handleExit,
    userService,
    handleSubmit,
    isCreateEventLoading,
    isCreateEventSuccess,
  };
};

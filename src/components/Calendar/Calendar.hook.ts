import {useState, useEffect} from 'react';
import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom';
import {getUserById} from './Calendar.requests';
import type {UserByIdInterface} from './Calendar.types';

export const useCalendar = () => {
  const {userId} = useParams();
  const {isSuccess, data} = useQuery('getUserById', () => getUserById(userId));
  const [profile, setProfile] = useState<UserByIdInterface>(null);
  useEffect(() => {
    if (isSuccess && data) {
      const unknownData = data as unknown;
      const user = unknownData as UserByIdInterface;
      setProfile(user);
    }
  }, [isSuccess, data]);
  return {
    profile,
  };
};

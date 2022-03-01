import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {useAtom} from 'jotai';
import {setUserAtom} from '../../state';
import {fetchUser} from './Auth.request';

export const useAuth = () => {
  const {isSuccess, data, isLoading} = useQuery('user', fetchUser);
  const [, setUser] = useAtom(setUserAtom);
  useEffect(() => {
    if (isSuccess) {
      setUser({isAuthenticated: true, ...data});
    }
  }, [isSuccess, data]);

  return {isLoading};
};

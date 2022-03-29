import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {useAtom} from 'jotai';
import {setUserAtom, tokenAtom} from '../../state';
import {fetchUser} from './Auth.request';
import {useSearchParams} from 'react-router-dom';

export const useAuth = () => {
  const [token, setToken] = useAtom(tokenAtom);
  const {isSuccess, data, isLoading, isError} = useQuery('user', fetchUser, {
    enabled: !!token,
  });
  const [, setUser] = useAtom(setUserAtom);
  const [params] = useSearchParams();

  useEffect(() => {
    const tokenParam = params.get('token');
    if (tokenParam && !token) {
      setToken(tokenParam);
      window.location.reload();
    }
    if (isSuccess) {
      setUser({isAuthenticated: true, ...data});
    } else if (isError) {
      setToken(null);
    }
  }, [isSuccess, data, isError]);

  return {isLoading};
};

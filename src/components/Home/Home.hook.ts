import {useQuery} from 'react-query';
import {useAtom} from 'jotai';
import {getUsers} from './Home.requests';
import {userAtom} from '../../state/';

export const useHome = () => {
  const [{isAuthenticated}] = useAtom(userAtom);
  const {data, isSuccess} = useQuery('users', getUsers, {
    enabled: isAuthenticated,
  });

  return {
    isAuthenticated,
    users: data,
    isSuccess,
  };
};

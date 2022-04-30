import {useQuery} from 'react-query';
import {useAtom} from 'jotai';
import {getServices} from './Services.requests';
import {userAtom} from '../../state';

export const useServices = () => {
  const [{isAuthenticated}] = useAtom(userAtom);
  const {data, isSuccess} = useQuery('services', getServices, {
    enabled: isAuthenticated,
  });

  return {
    isAuthenticated,
    services: data,
    isSuccess,
  };
};

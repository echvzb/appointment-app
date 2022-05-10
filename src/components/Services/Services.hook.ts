import {useMutation, useQuery} from 'react-query';
import {useAtom} from 'jotai';
import {getServices, deleteService} from './Services.requests';
import {userAtom} from '../../state';

export const useServices = () => {
  const [{isAuthenticated}] = useAtom(userAtom);
  const {data, isSuccess, refetch} = useQuery('services', getServices, {
    enabled: isAuthenticated,
  });
  const {mutateAsync} = useMutation(deleteService);

  const handleDelete = async (id: string) => {
    try {
      await mutateAsync(id);
      refetch();
    } catch (error) {}
  };
  return {
    isAuthenticated,
    services: data,
    isSuccess,
    handleDelete,
  };
};

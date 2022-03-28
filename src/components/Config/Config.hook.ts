import {useQuery} from 'react-query';
import {getConfig} from './Config.requests';

export const useConfig = () => {
  const {data: config} = useQuery('getConfig', getConfig);

  return {config};
};

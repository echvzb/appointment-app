import {http} from '../../request';
import type {Config} from './Config.types';

const configEndpoint = '/user/config';

export const getConfig = () => http.get(configEndpoint);

export const updateConfig = (config: Config) =>
  http.patch(configEndpoint, {config});

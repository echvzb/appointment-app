import {http} from '../../request';

const configEndpoint = '/user/config';

export const getConfig = () => http.get(configEndpoint);

export const updateConfig = () => http.patch(configEndpoint);

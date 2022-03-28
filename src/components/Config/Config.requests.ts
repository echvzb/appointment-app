import {http} from '../../request';

export const getConfig = () => http.get('/user/config');

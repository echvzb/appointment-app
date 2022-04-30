import {http} from '../../request';

export const getServices = () => http.get('/services');

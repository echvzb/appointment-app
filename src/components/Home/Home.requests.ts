import {http} from '../../request';

export const getUsers = () => http.get('/user/all');

import {http} from '../../request';

export const fetchUser = () => http.get('/user');

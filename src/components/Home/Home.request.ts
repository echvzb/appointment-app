import {http} from '../../request';

export const logout = () => http.get('/logout');

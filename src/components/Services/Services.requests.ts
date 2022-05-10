import {http} from '../../request';

export const getServices = () => http.get('/services');

export const deleteService = (id: string) => http.delete(`/services/${id}`);

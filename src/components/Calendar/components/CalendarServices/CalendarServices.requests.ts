import {http} from '../../../../request';

export const getUserServices = (userId: string) => {
  return http.get(`/user/${userId}/services`);
};

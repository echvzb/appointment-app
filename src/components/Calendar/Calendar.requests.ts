import {AxiosResponse} from 'axios';
import {http} from '../../request';
import type {UserByIdInterface} from './Calendar.types';
import type {ErrorRequest} from '../../request';

export const getUserById = (
  userId: string,
): Promise<AxiosResponse<UserByIdInterface, ErrorRequest>> =>
  http.get(`/user/${userId}`);

export const getCalendar = (userId: string, date: string) => {
  return http.get(`/calendar/${userId}`, {params: {date}});
};

export const createEvent = ({
  userId,
  ...data
}: {
  userId: string;
  serviceId: string;
  date: string;
}) => {
  return http.post(`/calendar/${userId}/event`, data);
};

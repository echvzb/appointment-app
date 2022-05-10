import {Dispatch} from 'react';

export interface UserByIdInterface {
  name: string;
  image: string;
  email: string;
}

export interface UserServiceInterface {
  _id: string;
  name: string;
  timeInMinutes: number;
}

export interface CalendarContextInterface {
  userId: string;
  dateState: [Date[], Dispatch<Date[]>] | [];
  userServiceState: [UserServiceInterface, Dispatch<UserServiceInterface>] | [];
}

import {Dispatch} from 'react';

export interface UserByIdInterface {
  name: string;
  image: string;
  email: string;
}

export interface CalendarContextInterface {
  dateState: [Date[], Dispatch<Date[]>] | [];
  timeState: [Date, Dispatch<Date>] | [];
}

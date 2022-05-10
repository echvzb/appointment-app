import {createContext, useState, FC} from 'react';
import {useParams} from 'react-router-dom';
import type {CalendarContextInterface} from './Calendar.types';

export const CalendarContext = createContext<CalendarContextInterface>({
  userId: '',
  dateState: [],
  userServiceState: [],
});

export const CalendarProvider: FC<{children: JSX.Element[] | JSX.Element}> = ({
  children,
}) => {
  const {userId} = useParams();
  return (
    <CalendarContext.Provider
      value={{
        userId,
        dateState: useState([new Date()]),
        userServiceState: useState({
          _id: '',
          name: '',
          timeInMinutes: 0,
        }),
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

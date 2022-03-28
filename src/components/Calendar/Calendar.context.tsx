import {createContext, useState, FC} from 'react';
import type {CalendarContextInterface} from './Calendar.types';

export const CalendarContext = createContext<CalendarContextInterface>({
  dateState: [],
});

export const CalendarProvider: FC<{children: JSX.Element[] | JSX.Element}> = ({
  children,
}) => {
  return (
    <CalendarContext.Provider
      value={{
        dateState: useState([new Date()]),
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

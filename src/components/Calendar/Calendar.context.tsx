import {createContext, useState, FC} from 'react';

export const CalendarContext = createContext({
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

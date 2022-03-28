import {useCalendar} from './Calendar.hook';
import {HeadingMedium} from 'baseui/typography';
import {CalendarProvider} from './Calendar.context';
import {CalendarHeader, CalendarBody} from './components';

export const Calendar = () => {
  const {profile} = useCalendar();

  if (profile) {
    return (
      <CalendarProvider>
        <HeadingMedium>Make an appointment with {profile.name}</HeadingMedium>
        <CalendarHeader />
        <CalendarBody />
      </CalendarProvider>
    );
  }
  return null;
};

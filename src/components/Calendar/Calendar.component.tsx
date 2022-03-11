import {useCalendar} from './Calendar.hook';
import {HeadingMedium, ParagraphMedium} from 'baseui/typography';
import {DatePicker} from 'baseui/datepicker';

export const Calendar = () => {
  const {profile, handleChangeDate, date, calendarData, isCalendarLoading} =
    useCalendar();
  if (profile) {
    return (
      <>
        <HeadingMedium>{profile.name} calendar</HeadingMedium>
        <DatePicker
          value={date}
          onChange={handleChangeDate}
          formatString="dd/MM/yyyy"
        />
        <ParagraphMedium>
          {calendarData && !isCalendarLoading && JSON.stringify(calendarData)}
        </ParagraphMedium>
      </>
    );
  }
  return null;
};

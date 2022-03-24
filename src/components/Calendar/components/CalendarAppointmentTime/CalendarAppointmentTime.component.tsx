import {FC} from 'react';
import {useStyletron} from 'baseui';
import {ParagraphXSmall} from 'baseui/typography';
import {useCalendarAppointmentTime} from './CalendarAppointmentTime.hook';
import {CalendarAppointmentTimeProps} from './CalendarAppointmentTime.types';

export const CalendarAppointmentTime: FC<CalendarAppointmentTimeProps> = ({
  timeInterval,
  day,
}) => {
  const [css, theme] = useStyletron();
  const {startTimeInMinutes, totalTimeInMinutes} =
    useCalendarAppointmentTime(timeInterval);
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.backgroundLightNegative,
        gridColumn: day + 2,
        gridRow: `${startTimeInMinutes} / span ${totalTimeInMinutes} `,
      })}
    >
      <ParagraphXSmall>{timeInterval}</ParagraphXSmall>
    </div>
  );
};

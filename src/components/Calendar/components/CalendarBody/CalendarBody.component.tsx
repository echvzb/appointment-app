import {useStyletron} from 'baseui';
import {useCalendarBody} from './CalendarBody.hook';
import {CalendarSideTime} from '../CalendarSideTime';
import {CalendarAppointmentTime} from '../CalendarAppointmentTime';

export const CalendarBody = () => {
  const [css, theme] = useStyletron();
  const {data} = useCalendarBody();

  return (
    <div
      className={css({
        display: 'grid',
        paddingBlock: theme.sizing.scale500,
        gridTemplateColumns: '64px repeat(7, 1fr)',
        gridTemplateRows: 'repeat(1440, 1px)',
        gridColumnGap: '2px',
        height: 24 * 60 + 'px',
        maxHeight: '60vh',
        overflow: 'scroll',
      })}
    >
      <CalendarSideTime />
      {data &&
        []
          .concat(data)
          .map((data, i) =>
            data.map((timeInterval) => (
              <CalendarAppointmentTime
                timeInterval={timeInterval}
                day={i}
                key={`appointment-${timeInterval}`}
              />
            )),
          )}
    </div>
  );
};

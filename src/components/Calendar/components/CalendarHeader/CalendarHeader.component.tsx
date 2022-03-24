import {useStyletron} from 'baseui';
import {DatePicker} from 'baseui/datepicker';
import {TimePicker} from 'baseui/timepicker';
import {
  HeadingSmall,
  HeadingXSmall,
  ParagraphSmall,
  ParagraphXSmall,
} from 'baseui/typography';
import {useCalendarHeader} from './CalendarHeader.hook';

export const CalendarHeader = () => {
  const [css, theme] = useStyletron();
  const {date, handleChangeDate, calendarHeaderData} = useCalendarHeader();
  return (
    <>
      <div
        className={css({
          display: 'grid',
          marginTop: theme.sizing.scale800,
          marginBottom: '2px',
          backgroundColor: theme.colors.backgroundPrimary,
          gridTemplateColumns: '4fr 1fr 1fr',
          gridTemplateRows: 'repeat(2, auto)',
          gridColumnGap: '2px',
          gridRowGap: '2px',
          textAlign: 'center',
        })}
      >
        <div
          className={css({
            gridRow: '1 / 3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: theme.colors.backgroundSecondary,
          })}
        >
          <HeadingSmall $style={{margin: 0}}>
            {`${calendarHeaderData.month} ${calendarHeaderData.year}`}
          </HeadingSmall>
        </div>
        <div
          className={css({
            backgroundColor: theme.colors.backgroundSecondary,
          })}
        >
          <ParagraphSmall $style={{margin: '4px 0'}}>Date</ParagraphSmall>
        </div>
        <div
          className={css({
            backgroundColor: theme.colors.backgroundSecondary,
          })}
        >
          <ParagraphSmall $style={{margin: '4px 0'}}>Time</ParagraphSmall>
        </div>
        <DatePicker
          value={date}
          onChange={handleChangeDate}
          formatString="dd/MM/yyyy"
        />
        <TimePicker format="24" />
      </div>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '64px repeat(7, 1fr)',
          gridTemplateRows: 'auto',
          gridColumnGap: '2px',
          borderBottom: `2px solid ${theme.colors.backgroundPrimary}`,
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            paddingRight: theme.sizing.scale500,
            backgroundColor: theme.colors.backgroundTertiary,
            textAlign: 'right',
            justifyContent: 'right',
          })}
        >
          <ParagraphXSmall $style={{margin: 0}}>Time</ParagraphXSmall>
        </div>
        {calendarHeaderData.days.map(({name, date}) => (
          <div
            key={name}
            className={css({
              paddingRight: theme.sizing.scale500,
              backgroundColor: theme.colors.backgroundTertiary,
              textAlign: 'center',
            })}
          >
            <ParagraphXSmall $style={{margin: '4px 0 2px'}}>
              {name}
            </ParagraphXSmall>
            <HeadingXSmall $style={{margin: '2px 0 4px'}}>{date}</HeadingXSmall>
          </div>
        ))}
      </div>
    </>
  );
};

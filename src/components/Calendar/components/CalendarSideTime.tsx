import {useStyletron} from 'baseui';
import {ParagraphXSmall} from 'baseui/typography';
import {FC, Fragment} from 'react';

export const CalendarSideTime: FC = () => {
  const [css, theme] = useStyletron();
  return (
    <>
      {Array(24)
        .fill(0)
        .map((_, i) => (
          <Fragment key={'time-' + i}>
            <div
              className={css({
                gridColumn: '2 / span 7',
                gridRow: 60 * i,
                backgroundColor: theme.colors.backgroundTertiary,
              })}
            />
            <div
              className={css({
                gridColumn: '1',
                gridRow: 60 * i,
                textAlign: 'right',
                paddingRight: theme.sizing.scale500,
              })}
            >
              <ParagraphXSmall $style={{margin: 0, lineHeight: '12px'}}>
                {i < 10 ? '0' + i : i}:00
              </ParagraphXSmall>
            </div>
          </Fragment>
        ))}
    </>
  );
};

import {FC, ReactElement} from 'react';
import {useStyletron} from 'baseui';

export const AppContainer: FC<{children: ReactElement}> = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        minHeight: '100vh',
        backgroundColor: theme.colors.backgroundPrimary,
        transitionDuration: theme.animation.timing300,
      })}
    >
      {children}
    </div>
  );
};

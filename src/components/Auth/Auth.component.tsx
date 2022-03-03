import {FC} from 'react';
import {useAuth} from './Auth.hook';
import {Layer} from 'baseui/layer';
import {StyledSpinnerNext, SIZE} from 'baseui/spinner';
import {useStyletron} from 'baseui';

export const Auth: FC = () => {
  const {isLoading} = useAuth();
  const [css, theme] = useStyletron();

  if (isLoading) {
    return (
      <Layer>
        <div
          className={css({
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.backgroundPrimary,
          })}
        >
          <StyledSpinnerNext $size={SIZE.large} />
        </div>
      </Layer>
    );
  }
  return null;
};

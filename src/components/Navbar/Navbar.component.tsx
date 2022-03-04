import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, ButtonProps, KIND} from 'baseui/button';
import {Avatar} from 'baseui/avatar';
import {useStyletron} from 'baseui';
import {useNavbar} from './Navbar.hook';
import {NavbarProps} from './Navbar.types';

const Navlink: FC<ButtonProps> = ({children, ...restProps}) => {
  return (
    <Button
      {...restProps}
      kind={KIND.secondary}
      overrides={{
        BaseButton: {
          style: () => ({
            display: 'block',
            width: '100%',
          }),
        },
      }}
    >
      {children}
    </Button>
  );
};

export const Navbar: FC<NavbarProps> = ({children}) => {
  const {currentTheme, toggleTheme, buttonText, handleClick, userName, image} =
    useNavbar();
  const [css, theme] = useStyletron();
  const navigate = useNavigate();
  console.log(theme);
  return (
    <div>
      <div
        className={css({
          ['backgroundColor']: theme.colors.backgroundTertiary,
          [theme.mediaQuery.medium]: {
            ['display']: 'flex',
            ['alignItems']: 'center',
            ['flexDirection']: 'column',
            ['transitionProperty']: 'all',
            ['transitionDuration']: theme.animation.timing300,
            ['transitionTimingFunction']: theme.animation.easeOutCurve,
            ['width']: '72px',
            ['maxWidth']: '256px',
            ['position']: 'fixed',
            ['height']: '100vh',
            ['boxShadow']: theme.lighting.shadow500,
            ':hover': {
              width: '256px',
            },
          },
        })}
      >
        <Avatar
          name={userName || ''}
          src={image}
          size="scale1400"
          overrides={{
            Root: {
              style: ({$theme}) => ({
                margin: `${$theme.sizing.scale700} 0`,
              }),
            },
          }}
        />
        <Navlink onClick={toggleTheme}>{currentTheme}</Navlink>
        <Navlink onClick={handleClick}>{buttonText}</Navlink>
        <Navlink onClick={() => navigate('/', {replace: true})}>Home</Navlink>
      </div>
      <div
        className={css({
          [theme.mediaQuery.medium]: {
            width: '100vw',
            boxSizing: 'border-box',
            paddingLeft: '104px',
            paddingRight: '32px',
          },
        })}
      >
        {children}
      </div>
    </div>
  );
};

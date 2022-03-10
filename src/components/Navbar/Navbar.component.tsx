import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, ButtonProps, KIND, SIZE} from 'baseui/button';
import {Avatar} from 'baseui/avatar';
import {useStyletron} from 'baseui';
import {useNavbar} from './Navbar.hook';
import {NavbarProps} from './Navbar.types';
import {Moon, Sun, LogOut, LogIn, Home, Menu, X} from 'react-feather';

const Navlink: FC<ButtonProps> = ({children, ...restProps}) => {
  return (
    <Button
      {...restProps}
      kind={KIND.secondary}
      size={SIZE.large}
      overrides={{
        BaseButton: {
          style: () => ({
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
  const {
    currentTheme,
    toggleTheme,
    buttonText,
    handleClick,
    userName,
    image,
    isOpen,
    toggleMenu,
  } = useNavbar();
  const [css, theme] = useStyletron();
  const navigate = useNavigate();
  console.log(theme);

  return (
    <div>
      <div
        className={css({
          ['position']: 'fixed',
          ['top']: 0,
          ['left']: 0,
          ['right']: 0,
          ['zIndex']: 1000,
          ['backgroundColor']: theme.colors.backgroundTertiary,
          ['maxHeight']: '100vh',
          ['transition']: 'all 0.3s ease-in-out',
          ['height']: isOpen ? '100vh' : 'auto',
          ['boxShadow']: theme.lighting.shadow500,
          ['display']: 'flex',
          ['flexDirection']: 'column',
          [theme.mediaQuery.medium]: {
            ['width']: '72px',
            ['height']: '100vh',
          },
        })}
      >
        <div
          className={css({
            [theme.mediaQuery.medium]: {
              display: 'none',
            },
          })}
        >
          <Navlink onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</Navlink>
        </div>
        <div
          className={css({
            ['display']: isOpen ? 'flex' : 'none',
            ['alignItems']: 'center',
            ['flexDirection']: 'column',
            ['flexGrow']: 1,
            [theme.mediaQuery.medium]: {
              display: 'flex',
            },
          })}
        >
          {userName && (
            <Avatar
              name={userName}
              src={image}
              size="scale1200"
              overrides={{
                Root: {
                  style: ({$theme}) => ({
                    margin: `${$theme.sizing.scale700} 0`,
                  }),
                },
              }}
            />
          )}
          <Navlink onClick={() => navigate('/', {replace: true})}>
            <Home />
          </Navlink>
          <div
            className={css({
              marginTop: 'auto',
              width: '100%',
            })}
          >
            <Navlink onClick={toggleTheme}>
              {currentTheme === 'dark' ? <Moon /> : <Sun />}
            </Navlink>
            <Navlink onClick={handleClick}>
              {buttonText === 'Logout' ? <LogOut /> : <LogIn />}
            </Navlink>
          </div>
        </div>
      </div>
      <div
        className={css({
          ['marginTop']: theme.sizing.scale1600,
          width: '100vw',
          boxSizing: 'border-box',
          padding: '0 ' + theme.sizing.scale600,
          [theme.mediaQuery.medium]: {
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

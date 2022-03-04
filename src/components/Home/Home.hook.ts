import {useAtom} from 'jotai';
import {currentThemeAtom, userAtom, setUserAtom, tokenAtom} from '../../state';
import {useNavigate} from 'react-router-dom';

export const useHome = () => {
  const [currentTheme, setCurrentTheme] = useAtom(currentThemeAtom);
  const [, setUser] = useAtom(setUserAtom);
  const [user] = useAtom(userAtom);
  const [, setToken] = useAtom(tokenAtom);
  const navigate = useNavigate();

  const toggleTheme = () =>
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  const handleLogout = () => {
    setToken('');
    setUser({isAuthenticated: false});
    navigate('/');
  };

  if (user.isAuthenticated) {
    return {
      currentTheme,
      toggleTheme,
      buttonText: 'Logout',
      handleClick: handleLogout,
    };
  }
  return {
    currentTheme,
    toggleTheme,
    buttonText: 'Login',
    handleClick: () => navigate('/login', {replace: true}),
  };
};

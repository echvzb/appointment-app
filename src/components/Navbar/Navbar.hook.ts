import {useAtom} from 'jotai';
import {currentThemeAtom, userAtom, setUserAtom, tokenAtom} from '../../state';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

export const useNavbar = () => {
  const [currentTheme, setCurrentTheme] = useAtom(currentThemeAtom);
  const [, setUser] = useAtom(setUserAtom);
  const [user] = useAtom(userAtom);
  const [, setToken] = useAtom(tokenAtom);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () =>
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  const toggleMenu = () => setIsOpen((prevValue) => !prevValue);

  const handleLogout = () => {
    setToken('');
    setUser({isAuthenticated: false});
    navigate('/');
  };

  if (user.isAuthenticated) {
    return {
      userName: user.name,
      image: user.image,
      currentTheme,
      toggleTheme,
      buttonText: 'Logout',
      handleClick: handleLogout,
      toggleMenu,
      isOpen,
    };
  }
  return {
    userName: '',
    image: '',
    currentTheme,
    toggleTheme,
    buttonText: 'Login',
    handleClick: () => navigate('/login', {replace: true}),
    toggleMenu,
    isOpen,
  };
};

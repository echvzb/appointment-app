import {useAtom} from 'jotai';
import {currentThemeAtom, userAtom, setUserAtom} from '../../state';
import {useNavigate} from 'react-router-dom';
import {useQuery} from 'react-query';
import {logout} from './Home.request';
import {useEffect} from 'react';

export const useHome = () => {
  const [currentTheme, setCurrentTheme] = useAtom(currentThemeAtom);
  const [, setUser] = useAtom(setUserAtom);
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();
  const {refetch, isFetching, isSuccess} = useQuery('logout', logout, {
    enabled: false,
  });

  console.log(user);

  const toggleTheme = () =>
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  const handleLogout = async () => {
    try {
      await refetch();
      setUser({isAuthenticated: false});
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess]);

  if (user.isAuthenticated) {
    return {
      currentTheme,
      isFetching,
      toggleTheme,
      buttonText: 'Logout',
      handleClick: handleLogout,
    };
  }
  return {
    currentTheme,
    isFetching,
    toggleTheme,
    buttonText: 'Login',
    handleClick: () => navigate('/login', {replace: true}),
  };
};

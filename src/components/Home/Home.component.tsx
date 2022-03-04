import {Button} from 'baseui/button';
import {useHome} from './Home.hook';

export const Home = () => {
  const {currentTheme, toggleTheme, buttonText, handleClick} = useHome();
  return (
    <div>
      <Button onClick={toggleTheme}>{currentTheme}</Button>
      <Button onClick={handleClick}>{buttonText}</Button>
    </div>
  );
};

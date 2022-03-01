import {Button} from 'baseui/button';
import {useHome} from './Home.hook';

export const Home = () => {
  const {currentTheme, toggleTheme, isFetching, buttonText, handleClick} =
    useHome();
  return (
    <div>
      <Button onClick={toggleTheme}>{currentTheme}</Button>
      <Button onClick={handleClick} isLoading={isFetching}>
        {buttonText}
      </Button>
    </div>
  );
};

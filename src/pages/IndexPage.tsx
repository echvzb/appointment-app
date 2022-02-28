import {useAtom} from 'jotai';
import {currentThemeAtom} from '../state/atoms/theme';
import {Button} from 'baseui/button';

export const IndexPage = () => {
  const [currentTheme, setCurrentTheme] = useAtom(currentThemeAtom);
  return (
    <div>
      <Button
        onClick={() =>
          setCurrentTheme((prevTheme) =>
            prevTheme === 'light' ? 'dark' : 'light',
          )
        }
      >
        {currentTheme}
      </Button>
    </div>
  );
};

import {ReactElement, FC} from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {BaseProvider} from 'baseui';
import {useAtom} from 'jotai';
import {themeAtom} from '../state/atoms/theme';

const engine = new Styletron();

export const BaseWebProvider: FC<{children: ReactElement}> = ({children}) => {
  const [theme] = useAtom(themeAtom);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>{children}</BaseProvider>
    </StyletronProvider>
  );
};

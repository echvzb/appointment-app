import Router from './Router';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from './style';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

export default App;

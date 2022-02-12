import {createGlobalStyle} from 'styled-components';
export * from './theme';

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100vh;
    background:${({theme}) => theme.colors.primary['50']};
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

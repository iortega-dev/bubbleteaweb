import { createGlobalStyle } from 'styled-components';
import { palette } from './palette';

export const GlobalStyles = createGlobalStyle`

* {
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: border-box;
    color: ${palette.black};
  }
`;

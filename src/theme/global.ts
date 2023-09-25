import { createGlobalStyle } from 'styled-components';
import { palette } from './palette';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'singkongregular';
    src: url('/fonts/singkong-webfont.woff2') format('woff2'),
         url('/fonts/singkong-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  } 

  @font-face {
    font-family: 'mouldycheese';
    src: url('/fonts/mouldycheese-webfont.woff2') format('woff2'),
          url('/fonts/mouldycheese-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
} 

* {
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: border-box;
    color: ${palette.black};
  }
`;

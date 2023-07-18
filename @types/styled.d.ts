import 'styled-components';
import { defaultTheme } from '../src/theme/defaultTheme';

type DefaultThemeValues = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DefaultThemeValues {}
}

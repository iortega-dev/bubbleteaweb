import { breakpoints } from './breakpoints';
import { spacing } from './spacing';
import { palette } from './palette';
import { sizing } from './sizing';
import { utils } from './utils';

const defaultTheme = {
  breakpoints,
  palette,
  spacing,
  sizing,
  utils,
} as const;

export { defaultTheme };

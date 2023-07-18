export const breakpointsValues = {
  xs: '376px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
} as const;

const deviceOrientationValues = {
  portrait: 'portrait',
  landscape: 'landscape',
} as const;

export type DeviceSizes = keyof typeof breakpointsValues;
type DeviceOrientations = keyof typeof deviceOrientationValues;

type BreakpointUp = `@media (min-width: ${(typeof breakpointsValues)[DeviceSizes]})`;
type BreakpointDown = `@media (max-width: ${(typeof breakpointsValues)[DeviceSizes]})`;
type BreakpointBetween =
  `@media (min-width: ${(typeof breakpointsValues)[DeviceSizes]}) and (max-width: ${(typeof breakpointsValues)[DeviceSizes]})`;

type BreakpointUpWithOrientation =
  `@media (min-width: ${(typeof breakpointsValues)[DeviceSizes]}) and (orientation: ${(typeof deviceOrientationValues)[DeviceOrientations]})`;
type BreakpointDownWithOrientation =
  `@media (max-width: ${(typeof breakpointsValues)[DeviceSizes]}) and (orientation: ${(typeof deviceOrientationValues)[DeviceOrientations]})`;
type BreakpointBetweenWithOrientation =
  `@media (min-width: ${(typeof breakpointsValues)[DeviceSizes]}) and (max-width: ${(typeof breakpointsValues)[DeviceSizes]}) and (orientation: ${(typeof deviceOrientationValues)[DeviceOrientations]})`;

/**
 * For manage breakpoints, this object provides breakpoints values and methods for define media queries
 * 
 * Use example:

    ```tsx
    breakpoints.values.md; // returns -> '768px'
    breakpoints.up('lg'); // returns -> '@media (min-width: 992px)'
    breakpoints.down('xl'); // returns -> '@media (max-width: 1200px)'
    breakpoints.between('sm', 'xl'); // returns -> '@media (min-width: 576px) and (max-width: 1200px)'
    breakpoints.down('lg', 'landscape'); // returns -> '@media (max-width: 992px) and (orientation: landscape)'
    ```
 */
export const breakpoints = {
  values: { ...breakpointsValues },
  up: (
    breakpoint: DeviceSizes,
    orientation?: DeviceOrientations
  ): BreakpointUp | BreakpointUpWithOrientation =>
    orientation
      ? `@media (min-width: ${breakpointsValues[breakpoint]}) and (orientation: ${deviceOrientationValues[orientation]})`
      : `@media (min-width: ${breakpointsValues[breakpoint]})`,
  down: (
    breakpoint: DeviceSizes,
    orientation?: DeviceOrientations
  ): BreakpointDown | BreakpointDownWithOrientation =>
    orientation
      ? `@media (max-width: ${breakpointsValues[breakpoint]}) and (orientation: ${deviceOrientationValues[orientation]})`
      : `@media (max-width: ${breakpointsValues[breakpoint]})`,
  between: (
    start: DeviceSizes,
    end: DeviceSizes,
    orientation?: DeviceOrientations
  ): BreakpointBetween | BreakpointBetweenWithOrientation =>
    orientation
      ? `@media (min-width: ${breakpointsValues[start]}) and (max-width: ${breakpointsValues[end]}) and (orientation: ${deviceOrientationValues[orientation]})`
      : `@media (min-width: ${breakpointsValues[start]}) and (max-width: ${breakpointsValues[end]})`,
};

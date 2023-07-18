const MARGIN_BASE = 8;

type SpacingScale =
  | 0
  | 0.25
  | 0.5
  | 0.75
  | 1
  | 1.25
  | 1.5
  | 1.75
  | 2
  | 2.25
  | 2.5
  | 2.75
  | 3
  | 3.25
  | 3.5
  | 3.75
  | 4
  | 5
  | 6
  | 7
  | 8
  | 10;
type SpacingScaleNegative =
  | -0.25
  | -0.5
  | -0.75
  | -1
  | -1.25
  | -1.5
  | -1.75
  | -2
  | -2.25
  | -2.5
  | -2.75
  | -3
  | -3.25
  | -3.5
  | -3.75
  | -4
  | -5
  | -6
  | -7
  | -8
  | -10;

type Scale = SpacingScale | SpacingScaleNegative | 'auto';

export interface SpacingFn {
  (value: Scale): string;
  (topBottom: Scale, rightLeft: Scale): string;
  (top: Scale, rightLeft: Scale, bottom: Scale): string;
  (top: Scale, right: Scale, bottom: Scale, left: Scale): string;
}

/** 
 * Use the spacing() helper to create consistent spacing between the elements.
 * 
 * The helper works with a scale based on multiples of 8px and only with values according with our design system.
 * 
 * Is configured for can use the same way that 'margin' or 'padding' css params definition,
 * being possible use in method only a one param for define global value, or two, three or four for
 * define diferents margins/paddings in top/bottom/left/right.

Usage:

```
spacing(2); // returns -> '16px'
spacing(2, 3); // returns -> '16px 24px'
spacing(4, 2, -1); // returns -> '32px 16px -8px'
spacing(1, 4, 2, 2); // returns -> '8px 32px 16px 16px'
spacing(1, auto, 2, 2); // returns -> '8px auto 16px 16px'
```
*/
export const spacing: SpacingFn = (...rest: Scale[]) => {
  const args = [...rest];
  let strValue = '';
  args.splice(0, 4).forEach((value) => {
    strValue += value === 'auto' ? `${value} ` : `${MARGIN_BASE * value}px `;
  });
  return strValue.trim();
};

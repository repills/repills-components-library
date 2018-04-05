import { extRem } from '../utils';

export const SIZE_SCALE = Object.freeze({
  mini: 12,
  small: 20,
  medium: 40,
  large: 60,
  xlarge: 120,
  mega: 240
});

export const SIZE_SCALE_REM = Object.entries(SIZE_SCALE).reduce((acc,entry) => {
  acc[entry[0]] = extRem(entry[1]);
  return acc;
}, {});

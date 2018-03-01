import { css } from 'styled-components';
import theme from '../config/theme';
import extRem from './extRem';

export const media = Object.keys(theme.breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${extRem(theme.breakpoints[label])}) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

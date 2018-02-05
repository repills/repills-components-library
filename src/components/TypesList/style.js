import { css } from 'styled-components';
import { rem, rgba } from 'polished';
import { SM, LG, XL } from '../../config/breakpoints';
import theme from '../../config/theme';

const { basic } = theme.palettes;

export const base = css`
  box-sizing: border-box;
  position: relative;
  
  &::after {
    content: '';
    width: ${rem('35px')};
    background-color: red;
    top: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: linear-gradient(to right, ${rgba(basic.primaryHighest, 0)}, ${rgba(basic.primaryHighest, .8)});
  }
`;

export const itemsWrapper = css`
  overflow-y: scroll;
`;

export const items = css`
  display: flex;
  flex-wrap: nowrap;
`;

export const item = css`
  flex: 1 0 94px;
  
  &.${SM} {
    flex-basis: 120px;
  }
  
  &.${LG} {
  }
  
  &.${XL} {
  }
`;

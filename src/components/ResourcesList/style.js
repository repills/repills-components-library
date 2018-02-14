import { css } from 'styled-components';
import { extRem } from '../../utils';
import { grid } from 'styled-components-grid';
import { SM, LG, XL } from '../../config/breakpoints';

const halfGutterStripUnit = 6;
const gutter = extRem(halfGutterStripUnit * 2);
const halfGutter = extRem(halfGutterStripUnit);

export const base = css`
  box-sizing: border-box;
`;

export const items = css`
  ${grid()}
  margin-left: -${halfGutter};
  margin-right: -${halfGutter};
`;

export const item = css`
  padding-left: ${halfGutter};
  padding-right: ${halfGutter};
  margin-bottom: ${gutter};
  
  ${grid.unit({ size: 1 })}
  
  &.${SM} {
    ${grid.unit({ size: 1/2 })}
  }
  
  &.${LG} {
    ${grid.unit({ size: 1/3 })}
  }
  
  &.${XL} {
    ${grid.unit({ size: 1/4 })}
  }
`;

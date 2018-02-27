import { css } from 'styled-components';
import { extRem } from '../../utils';
import { grid } from 'styled-components-grid';
import { SM, MD, LG } from '../../config/breakpoints';

const halfGutterStripUnit = 6;
const gutter = extRem(halfGutterStripUnit * 2);
const doubleGutter = extRem(halfGutterStripUnit * 4);
const halfGutter = extRem(halfGutterStripUnit);

export const base = css`
  box-sizing: border-box;
  width: 100%;
`;

export const items = css`
  ${grid()}
  margin-left: -${halfGutter};
  margin-right: -${halfGutter};
  
  &.${SM} {
    margin-left: -${gutter};
    margin-right: -${gutter};
  }
`;

export const item = css`
  padding-left: ${halfGutter};
  padding-right: ${halfGutter};
  padding-bottom: ${gutter};
  
  ${grid.unit({ size: 1 })}
  
  &.${SM} {
    ${grid.unit({ size: 1/2 })}
    padding-left: ${gutter};
    padding-right: ${gutter};
    padding-bottom: ${doubleGutter};
  }
  
  &.${MD} {
    ${grid.unit({ size: 1/3 })}
  }
  
  &.${LG} {
    ${grid.unit({ size: 1/4 })}
  }
`;

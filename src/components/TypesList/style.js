import { css } from 'styled-components';
import { extRem } from '../../utils';
import { grid } from 'styled-components-grid';
import { SM, MD } from '../../config/breakpoints';

const halfGutterStripUnit = 6;
const gutter = extRem(halfGutterStripUnit * 2);
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
  padding-bottom: 1px;
  
  ${grid.unit({ size: 1 })}
  
  &.${SM} {
    ${grid.unit({ size: 1/2 })}
    padding-left: ${gutter};
    padding-right: ${gutter};
  }
  
  &.${MD} {
    ${grid.unit({ size: 1/3 })}
  }
`;

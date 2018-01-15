import { css } from 'styled-components';
import { rem } from 'polished';
import { grid } from 'styled-components-grid';
import { SM, MD, LG } from '../../config/breakpoints';

const halfGutterStripUnit = 10;
const gutter = rem(`${halfGutterStripUnit * 2}px`);
const halfGutter = rem(`${halfGutterStripUnit}px`);

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
  ${grid.unit({ width: 1/2 })}
  
  &.${SM} {
    ${grid.unit({ width: 1/3 })}
  }
  
  &.${MD} {
    ${grid.unit({ width: 1/4 })}
  }
  
  &.${LG} {
    ${grid.unit({ width: 1/5 })}
  }
`;

import { css } from 'styled-components';
import { grid } from 'styled-components-grid';
import { SM, MD, LG, XL } from '../../config/breakpoints';

export const base = css`
  box-sizing: border-box;
`;

export const items = css`
  ${grid()}
`;

export const item = css`
  ${grid.unit({ width: 1/2 })}
  
  &.${SM} {
    ${grid.unit({ width: 1/3 })}
  }
  
  &.${MD} {
    ${grid.unit({ width: 1/4 })}
  }
  
  &.${LG} {
    ${grid.unit({ width: 1/6 })}
  }
  
  &.${XL} {
    ${grid.unit({ width: 1/8 })}
  }
`;

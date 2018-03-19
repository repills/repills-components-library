import { css } from 'styled-components';
import { extRem } from '../../utils';
import { grid } from 'styled-components-grid';
import { SM, LG } from '../../config/breakpoints';

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
  ${grid.unit({ size: 1 })}
  padding-left: ${halfGutter};
  padding-right: ${halfGutter};
  padding-bottom: ${gutter};
  
  &:last-child {
    padding-bottom: 0;
  }
    
  &.${SM} {
    ${grid.unit({ size: 1/2 })}
    padding-left: ${gutter};
    padding-right: ${gutter};
    padding-bottom: ${doubleGutter};
    
    &:nth-last-child(-n+${props => props.count % 2 === 0 ? 2 : (props.count % 2)}) {
      padding-bottom: 0;
    }
  }
  
  &.${LG} {
    ${grid.unit({ size: 1/3 })}
    
    &:nth-last-child(-n+${props => props.count % 3 === 0 ? 3 : (props.count % 3)}) {
      padding-bottom: 0;
    }
  }
`;

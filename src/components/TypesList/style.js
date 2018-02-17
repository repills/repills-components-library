import { css } from 'styled-components';
import { rgba } from 'polished';
import { extRem } from '../../utils';
import { SM, MD, LG } from '../../config/breakpoints';
// import theme from '../../config/theme';
import { grid } from 'styled-components-grid';

// const { neutral } = theme.palettes;

export const base = css`
  box-sizing: border-box;
  position: relative;
   
  ${props => props.shadeColor && `
    &::after {
      content: '';
      width: ${extRem(35)};
      top: 0;
      right: -1px;
      bottom: 0;
      background: linear-gradient(to right, ${rgba(props.shadeColor, 0)}, ${props.shadeColor});
      position: absolute;
    }
  `}
`;

export const itemsWrapper = css`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 0 -4px;
  
  &::-webkit-scrollbar {
    display: none; 
  }
`;

/*
export const items = css`
  ${grid()}
  display: flex;
  flex-wrap: nowrap;
  margin: 0 -1px;
`;
*/

export const item = css`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding: 4px;
  
  ${grid.unit({ size: 4/10 })}
  
  &.${SM} {
    ${grid.unit({ size: 3/14 })}
  }
  
  &.${MD} {
    ${grid.unit({ size: 3/17 })}
  }
  
  &.${LG} {
    ${grid.unit({ size: 3/23 })}
  }
`;

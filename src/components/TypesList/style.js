import { css } from 'styled-components';
import { rgba } from 'polished';
import { extRem } from '../../utils';
import { SM, MD, LG } from '../../config/breakpoints';
import theme from '../../config/theme';
import { grid } from 'styled-components-grid';

const { neutral } = theme.palettes;

export const base = css`
  box-sizing: border-box;
  position: relative;
  
  &::after {
    content: '';
    width: ${extRem(35)};
    top: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: linear-gradient(to right, ${rgba(neutral.medium, 0)}, ${neutral.medium});
  }
`;

export const itemsWrapper = css`
  overflow-y: scroll;
  box-shadow: 0 1px 2px 2px ${rgba(neutral.highest, 0.02)};
`;

export const items = css`
  ${grid()}
  display: flex;
  flex-wrap: nowrap;
  margin: 0 -1px;
`;

export const item = css`
  box-sizing: border-box;
  flex: 1 0 auto;
  padding: 1px;
  
  ${grid.unit({ size: 3/10 })}
  
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

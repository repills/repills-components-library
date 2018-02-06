import { css } from 'styled-components';
import { lighten, rgba } from 'polished';
import { grid } from 'styled-components-grid';
import theme from '../../config/theme';
import { XS, SM } from '../../config/breakpoints';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;
const mainColor = lighten(0.2, basic.primaryHighest);

export const base = css`
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background-color: ${mainColor};
  color: ${neutral.lowest};
  
  &:hover {
    
  }
`;

export const frame = css`
  ${grid()}
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  text-decoration: none;
  text-shadow: ${rgba(neutral.highest, 0.4)} 0 1px 2px;
  opacity: .9;
`;

export const counter = css`
  ${grid.unit({ size: 1 })}
  box-sizing: border-box;
  padding: ${extRem(35, 0)};
  text-transform: uppercase;
  opacity: .9;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  &.${XS} {
    ${grid.unit({ size: 2/7 })}
    order: 2;
    border: 1px solid ${rgba(neutral.highest, 0.4)}
  }
`;

export const total = css`
  ${typography.header3}
  font-weight: 400;
  line-height: 1;
`;

export const totalLabel = css`
  ${typography.mini}
  margin-top: ${extRem(7)};
`;

export const info = css`
  ${grid.unit({ size: 1 })}
  height: ${extRem(120)};
  box-sizing: border-box;
  position: relative;
  
  &.${XS} {
    ${grid.unit({ size: 5/7 })}
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    padding-bottom: ${extRem(20)};
    height: auto;
  }
`;

export const title = css`
  ${typography.body}
  margin: ${extRem(0,12,25)};
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${extRem(65)};
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${extRem(20)};
    background: linear-gradient(to bottom, ${rgba(mainColor, 0)}, ${mainColor});
  }
    
  &.${XS} {
    order: -1;
    position: relative;
    margin: ${extRem(20, 10, 20)};
  }
`;

export const composition = css`
  padding: ${extRem(0,12)};
  font-size: ${extRem(16)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

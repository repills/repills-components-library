import { css } from 'styled-components';
import { lighten, rgba } from 'polished';
import { grid } from 'styled-components-grid';
import theme from '../../config/theme';
import { XS } from '../../config/breakpoints';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;
const mainColor = lighten(0.2, neutral.lowest);

export const base = css`
  box-sizing: border-box;
  text-align: center;
  border: 1px solid ${neutral.medium};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background-color: ${mainColor};
  color: ${neutral.highest};
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  
  ${props => props.disabled && `
    opacity: .6;
    cursor: default;
  `}
  
  &:hover {
    
  }
`;

export const frame = css`
  ${grid()}
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  text-decoration: none;
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
  ${typography.header2}
  
  &.${XS} {
    ${grid.unit({ size: 2/7 })}
    padding: ${extRem(15, 0)};
    ${typography.header3}
    order: 2;
    border-left: 1px solid ${rgba(neutral.highest, 0.1)}
  }
`;

export const total = css`
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
    padding-bottom: ${extRem(15)};
    height: auto;
  }
`;

export const title = css`
  ${typography.body}
  margin: ${extRem(0,12,15)};
  position: absolute;
  box-sizing: border-box;
  font-weight: 600;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${extRem(45)};
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
    margin: ${extRem(15, 10)};
  }
`;



import { css } from 'styled-components';
import { lighten, rgba } from 'polished';
import { grid } from 'styled-components-grid';
import theme from '../../config/theme';
import { SM } from '../../config/breakpoints';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
const mainColor = lighten(0.2, neutral.lowest);

// box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
export const base = css`
  box-sizing: border-box;
  text-align: center;
  border: 1px solid ${neutral.medium};
  position: relative;
  cursor: pointer;
  background-color: ${mainColor};
  color: ${neutral.highest};
  
  ${props => props.disabled && `
    opacity: .6;
    cursor: default;
  `}
  
  &:hover {
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  }
`;

export const frame = css`
  ${grid()}
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  text-decoration: none;
`;

export const counter = css`
  ${grid.unit({ size: 2/7 })}
  box-sizing: border-box;
  text-transform: uppercase;
  opacity: .9;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${neutral.lower};
  padding: ${extRem(12, 0)};
  ${typography.header3}
  border-left: 1px solid ${neutral.low};
  
  &.${SM} {
    ${grid.unit({ size: 3/8 })}
  }
`;

export const total = css`
  line-height: 1;
`;

export const composition = css`
  margin-top: ${extRem(8)};
`;

export const info = css`
  ${grid.unit({ size: 5/7 })}
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  
  &.${SM} {
    ${grid.unit({ size: 5/8 })}
  }
`;

export const title = css`
  ${typography.caption}
  margin: ${extRem(0,12,20)};
  box-sizing: border-box;
  font-weight: 600;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${extRem(72)};
  overflow: hidden;
  line-height: 1.2;
  
  position: relative;
  margin: ${extRem(16, 12)};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${extRem(24)};
    background: linear-gradient(to bottom, ${rgba(mainColor, 0)}, ${mainColor});
  }
`;



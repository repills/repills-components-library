import { css } from 'styled-components';
import theme from '../../config/theme';
import { rgba, ellipsis } from 'polished';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
const mainColor = neutral.lowest;

// box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
// border-top: 4px solid ${props => props.color};

export const base = css`
  text-align: left;
  background-color: ${neutral.lowest};
  
  &:hover {
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  }
`;

export const mainInfo = css`
  padding: ${extRem(12)};
  background-color: ${mainColor};
  border: 1px solid ${neutral.medium};
  border-bottom-color: ${neutral.low};
  display: block;
  text-decoration: none;
  color: currentColor;
`;

export const source = css`
  ${typography.small}
  color: ${neutral.mediumHigh};
  display: flex;
  align-items: center;
  line-height: 1;
  text-decoration: none;
  
  span {
    margin-left: ${extRem(5)};
  }
`;

export const author = css`
  ${typography.small}
  ${ellipsis()}
  color: ${neutral.high};
  margin-left: ${extRem(8)};
  
  span {
    font-weight: bold;
  }
`;

export const title = css`
  ${typography.caption}
  color: ${neutral.high};
  margin: ${extRem(12, 0,8)};
  height: ${extRem(52)};
  position: relative;
  overflow: hidden;
  text-decoration: underline;
  cursor: pointer;
  
  a {
    color: currentColor;
  }
  
  &::after {
    content: '';
    height: ${extRem(24)};
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, ${rgba(mainColor, 0)}, ${mainColor});
    position: absolute;
  }
`;

export const secondaryInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${extRem(10,12)};
  border: 1px solid ${neutral.medium};
  border-top: 0;
`;

export const detail = css`
  color: ${neutral.high};
  display: flex;
  align-items: flex-end;
`;

export const type = css`
  ${typography.small}
  line-height: 1;
  display: inline-flex;
  align-items: center;
  margin-right: ${extRem(8)};
  
  span {
    margin-left: ${extRem(8)};
  }
`;

export const date = css`
  ${typography.mini}
  line-height: 1;
  color: ${neutral.mediumHigh};
`;

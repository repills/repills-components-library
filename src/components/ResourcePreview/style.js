import { css } from 'styled-components';
import theme from '../../config/theme';
import { rgba, lighten, ellipsis } from 'polished';
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
  padding: ${extRem(12,16,16)};
  background-color: ${mainColor};
  border: 1px solid ${neutral.low};
  display: block;
  text-decoration: none;
  color: currentColor;
  cursor: pointer;
`;

export const source = css`
  ${typography.mini}
  color: ${neutral.medium};
  display: flex;
  align-items: center;
  line-height: 1;
  text-decoration: none;
  
  span {
    margin-left: ${extRem(5)};
  }
`;

export const author = css`
  ${typography.mini}
  ${ellipsis()}
  color: ${neutral.high};
  margin-left: ${extRem(8)};
  
  span {
    font-weight: 600;
  }
`;

export const title = css`
  ${typography.caption}
  color: ${neutral.higher};
  margin: ${extRem(0,0,12)};
  height: ${extRem(54)};
  position: relative;
  overflow: hidden;
  text-decoration: underline;
  
  a {
    color: currentColor;
  }
  /*
  &::after {
    content: '';
    height: ${extRem(24)};
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, ${rgba(mainColor, 0)}, ${mainColor});
    position: absolute;
  }
  */
`;

export const secondaryInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${extRem(8,16)};
  border: 1px solid ${neutral.low};
  border-top-color: ${lighten(.06, neutral.low)};
  margin-top: -1px;
  line-height: 1;
`;

export const detail = css`
  color: ${neutral.high};
  display: flex;
  align-items: center;
  line-height: 1;
`;

export const type = css`
  ${typography.mini}
  line-height: 1;
  display: inline-flex;
  align-items: center;
  margin-right: ${extRem(8)};
  
  span {
    color: ${neutral.lowest};
    background-color: ${props => props.color};
    margin-left: 1px;
    white-space: nowrap;
    height: ${extRem(16)};
    line-height: ${extRem(16)};
    padding: ${extRem(0,8)};
  }
`;

export const date = css`
  ${typography.mini}
  cursor: pointer;
  line-height: 1;
  color: ${neutral.medium};
  
  a {
    text-decoration: none;
    color: currentColor;
  }
`;

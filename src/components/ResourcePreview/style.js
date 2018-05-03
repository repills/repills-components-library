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
  border: 1px solid ${neutral.low};
  border-radius: 5px;
`;

export const mainInfo = css`
  padding: ${extRem(12,16,14)};
  border-bottom: 0;
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
  ${typography.body}
  color: ${neutral.higher};
  overflow: hidden;
  line-height: 1.4;
  height: 2.8rem;
  margin: ${extRem(0,0,10)};
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  a {
    color: currentColor;
  }
`;

export const secondaryInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${extRem(0,16,10)};
  line-height: 1;
  margin-top: -4px;
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
    height: 1rem;
    line-height: 1rem;
    padding: ${extRem(0,6)};
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

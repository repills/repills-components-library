import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { SM, MD } from '../../config/breakpoints';

const { basic, neutral } = theme.palettes;

export const base = css`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  ${props => props.breakpointsStatus[SM] && `
    text-align: left;
    justify-content: flex-start;
  `}
`;

export const title = css`
  min-height: ${extRem(44)};
  margin: 0;
  display: flex;
  align-items: center;
  word-break: break-word;

  span {
    ${props => props.breakpointsStatus[MD] ? typography.header3 : typography.header4 }
    color: ${neutral.lowest};
    font-weight: 400;
    line-height: 1.1;
    margin-left: ${extRem(-3)};
  }
`;

export const main = css`
  position: relative;
    
  ${props => props.breakpointsStatus[SM] && `
    display: inline-block;
    padding-right: ${extRem(64)};
  `}
`;

export const sectionName = css`

  ${props => props.onClick && `
    text-decoration: underline;
    cursor: pointer;
  `}
`;

export const icon = css`
  color: ${basic.tertiary};
  
  ${props => props.breakpointsStatus[SM] && `
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
  `}
`;


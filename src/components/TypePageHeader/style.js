import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { SM } from '../../config/breakpoints';

const { neutral } = theme.palettes;

export const base = css`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => props.breakpointsStatus[SM] && `
    text-align: left;
    justify-content: flex-start;
  `}
`;

export const title = css`
  min-height: ${extRem(60)};
  margin: 0;
  display: flex;
  align-items: center;
  word-break: break-word;

  span {
    color: ${neutral.highest};
    line-height: 1.1;
    margin-left: ${extRem(-3)};
    ${typography.header2} 
  }
`;

export const main = css`
  position: relative;
    
  ${props => props.breakpointsStatus[SM] && `
    display: inline-block;
    padding-right: ${extRem(80)};
  `}
`;

export const sectionName = css`
    
  ${props => props.onClick && `
    text-decoration: underline;
    cursor: pointer;
  `}
`;

export const icon = css`
  color: ${props => props.color};
  margin-bottom: ${extRem(12)};
  
  ${props => props.breakpointsStatus[SM] && `
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
  `}
`;


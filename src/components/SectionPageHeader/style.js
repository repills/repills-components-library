import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { SM } from '../../config/breakpoints';

const { neutral } = theme.palettes;

export const base = css`
  text-align: center;
  
  ${props => props.breakpointsStatus[SM] && `
    text-align: left;
  `}
`;

export const title = css`
  color: ${neutral.highest};
  margin: 0;
  line-height: 1.1;
  word-break: break-word;
  margin-left: ${extRem(-3)};
  
  ${props => props.breakpointsStatus[SM] ? typography.header1 : typography.header2}
`;

export const main = css`
  position: relative;
    
  ${props => props.breakpointsStatus[SM] && `
    display: inline-block;
    padding-right: ${extRem(110)};
  `}
`;

export const label = css`
  ${typography.body}
  color: ${neutral.medium};
  text-transform: uppercase;
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

export const description = css`
  ${typography.body}
  color: ${neutral.medium};
  margin: ${extRem(24)} 0 0;
  line-height: 1.5;
  max-width: ${extRem(500)};
`;

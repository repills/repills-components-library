import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { SM } from '../../config/breakpoints';

const { neutral } = theme.palettes;

export const base = css`
  text-align: center;
  position: relative;
  
  ${props => props.breakpointsStatus[SM] && `
    text-align: left;
  `}
`;

export const title = css`
  color: ${neutral.higher};
  margin: 0;
  line-height: 1.1;
  word-break: break-word;
  margin-left: ${extRem(-3)};
  ${props => props.breakpointsStatus[SM] ? typography.header2 : typography.header3}
  font-weight: 600;
`;

export const main = css`
  position: relative;
    
  ${props => props.breakpointsStatus[SM] && `
    display: inline-block;
    padding-right: ${extRem(90)};
  `}
`;

export const label = css`
  ${typography.small}
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
  ${props => props.breakpointsStatus[SM] ? typography.body : typography.small}
  color: ${neutral.medium};
  margin: ${extRem(12)} 0 0;
  line-height: 1.5;
  max-width: ${extRem(500)};
`;

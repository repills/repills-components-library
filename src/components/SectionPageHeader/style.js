import { css } from 'styled-components';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { SM } from '../../config/breakpoints';
import { rgba } from 'polished';

const { basic, neutral } = theme.palettes;

export const base = css`
  text-align: center;
  position: relative;
  
  ${props => props.breakpointsStatus[SM] && `
    text-align: left;
  `}
`;

export const title = css`
  color: ${neutral.lowest};
  margin: 0;
  line-height: 1.1;
  word-break: break-word;
  ${props => props.breakpointsStatus[SM] ? typography.header2 : typography.header3}
  font-weight: 600;
`;

export const main = css`
  position: relative;
    
  ${props => props.breakpointsStatus[SM] && `
    display: inline-block;
    padding-right: 5.5rem;
  `}
`;

export const label = css`
  ${typography.small}
  color: ${rgba(neutral.lowest,.9)};
  text-transform: uppercase;
`;

export const icon = css`
  color: ${basic.tertiary};
  margin-bottom: 0.75rem;
  
  ${props => props.breakpointsStatus[SM] && `
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
  `}
`;

export const description = css`
  ${typography.small}
  color: ${rgba(neutral.lowest,.9)};
  margin: 1rem 0 0;
  line-height: 1.5;
  max-width: 30rem;
`;

import { css } from 'styled-components';
import { extRem } from '../../utils';
import { ellipsis } from 'polished';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { grid } from 'styled-components-grid';
import { SM, MD, LG } from '../../config/breakpoints';

const { basic, types, neutral } = theme.palettes;

export const base = css`
  padding: ${extRem(40)} 0;
  text-align: center;
  
  ${props => props.breakpointsStatus[MD] && `
    text-align: left;
    padding: ${extRem(60)} 0;
  `}
`;

export const title = css`
  ${typography.header2}
  color: ${neutral.highest};
  margin: 0;
  line-height: 1.1;
  word-break: break-word;
  margin-left: ${extRem(-3)};
`;

// ${typography.header1}

export const main = css`
  position: relative;
    
  ${props => props.breakpointsStatus[MD] && `
    display: inline-block;
    padding-right: ${extRem(100)};
  `}
`;

export const titleContainer = css`

`;

export const label = css`
  ${typography.body}
  color: ${neutral.mediumHigh};
  text-transform: uppercase;
`;

export const icon = css`
  color: ${props => props.color};
  margin-bottom: ${extRem(12)};
  
  ${props => props.breakpointsStatus[MD] && `
    position: absolute;
    right: 0;
    top: 0;
  `}
`;

export const description = css`
  ${typography.body}
  color: ${neutral.highest};
  margin: ${extRem(24)} 0 0;
  line-height: 1.5;
  max-width: ${extRem(500)};
`;

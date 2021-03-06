import { css } from 'styled-components';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

export const base = css`
  text-align: left;
`;

export const title = css`
  ${typography.header2} 
  word-break: break-word;
  color: ${neutral.lowest};
  line-height: 1.1;
  margin: 0;
  
  strong {
    color: ${basic.primary};
  }
`;

export const main = css`
  position: relative;
`;

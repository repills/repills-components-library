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
  color: ${neutral.higher};
  line-height: 1.1;
  
  strong {
    color: ${basic.primary};
  }
`;

export const main = css`
  position: relative;
`;

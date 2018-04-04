import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

export const base = css`
  position: relative;
  padding-left: ${extRem(60)};
  text-align: left;
`;

export const icon = css`
  position: absolute;
  top: ${extRem(4)};
  left: 0;
  color: ${neutral.medium};
`;

export const title = css`
  ${typography.caption}
  color: ${neutral.higher};
  margin: 0;
`;

export const description = css`
  ${typography.small}
  color: ${neutral.high};
  margin: ${extRem(4)} 0 0;
  
  a {
    font-weight: 600;
    color: currentColor;
    text-decoration: underline;
  }
`;

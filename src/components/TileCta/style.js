import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;

export const base = css`
  position: relative;
  text-align: center;
  border: 1px solid ${neutral.low};
  padding: ${extRem(20,16)};
`;

export const icon = css`
  color: ${neutral.high};
`;
export const action = css`
  margin-top: ${extRem(20)};
`;

export const title = css`
  ${typography.caption}
  color: ${neutral.high};
  margin: ${extRem(16,)} 0 0;
`;

export const description = css`
  ${typography.small}
  color: ${neutral.medium};
  margin: ${extRem(8)} 0 0;
  
  a {
    font-weight: 600;
    color: currentColor;
    text-decoration: underline;
  }
`;

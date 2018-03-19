import { css } from 'styled-components';
import { extRem } from '../../utils';
import { size, placeholder } from 'polished';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { basic, neutral, status } = palettes;

export const base = css`
  text-align: left;
`;

export const list = css`
  margin-top: ${extRem(10)};
  background-color: ${neutral.lower};
`;

export const item = css`
  ${typography.body}
  color: ${neutral.medium};
  cursor: pointer;
  padding: ${extRem(4, 12)};
`;

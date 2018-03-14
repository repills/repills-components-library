import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';

const { palettes } = theme;
const { neutral } = palettes;

export const base = css`
  display: flex;
  color: ${neutral.high};
`;

export const item = css`
  margin-right: ${extRem(4)};
  
  &:last-child {
    margin-right: 0;
  }
`;

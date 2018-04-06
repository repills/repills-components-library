import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;

export const base = css`
  text-align: left;
`;

export const list = css``;

export const tag = css`
  ${typography.mini}
  color: ${neutral.medium};
  border-radius: 3px;
  display: inline-block;
  padding: ${extRem(0,4)};
  background-color: ${neutral.lower};
  margin: ${extRem(0,4,4,0)};
  word-break: break-all;
  
  &:last-child {
    margin-right: 0;
  }
`;

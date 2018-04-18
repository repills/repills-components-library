import { css } from 'styled-components';
import { extRem } from '../../utils';

export const base = css`
  position: relative;
`;

export const actions = css`
  margin-top: ${extRem('32')};
  text-align: center;
`;

export const items = css`
  margin-left: ${extRem(-8)};
  margin-right: ${extRem(-8)};
`;

export const item = css`
  padding-left: ${extRem(8)};
  padding-right: ${extRem(8)};
`;

import { css } from 'styled-components';
import { size } from 'polished';
import { extRem } from '../../utils';
import { SM, MD, LG } from '../../config/breakpoints';
import theme from '../../config/theme';
import { grid } from 'styled-components-grid';

import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { basic, neutral } = palettes;

const indexSize = extRem(40);

export const base = css`
  text-align: left;
`;

export const header = css`
  position: relative;
  padding: ${extRem(6,0,0,52)};
`;

export const index = css`
  ${typography.body}
  ${size(indexSize)}
  background-color: ${basic.primary};
  color: ${neutral.lowest};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const title = css`
  ${typography.header4}
  color: ${neutral.highest};
  line-height: 1.2;
  margin: 0;
`;

export const body = css`
  ${typography.body}
  padding: ${extRem(16,52,28)};
`;



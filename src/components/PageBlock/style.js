import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
const sideCount = extRem(36);
export const base = css`
  text-align: left;
`;

export const title = css`
  ${typography.header3}
  color: ${neutral.high};
  line-heigh: 1.1;
  margin: 0;
  
  span {
    margin-right: ${extRem(12)};
  }
`;

export const count = css`
  font-size: 80%;
  color: ${neutral.mediumHigh};
  display: inline-block;
  align-items: center;
  justify-content: center;
  height; ${sideCount};
  line-height: ${sideCount};
  min-width: ${sideCount};
  background-color: ${neutral.low};
  text-align: center;
`;

export const body = css`
  ${typography.body}
  margin: ${extRem(28)} 0 0;
`;

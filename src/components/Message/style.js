import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
export const base = css`
  box-sizing: border-box;
  text-align: left;
  background-color: ${neutral.lower};
  padding: ${extRem(12,16)};
  position: relative;
  padding-right: ${extRem(80)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${extRem(68)};
`;

export const title = css`
  ${typography.caption}
  color: ${neutral.high};
  line-height: 1.2;
  margin: 0;
  display: flex;
  
  span {
    margin-right: ${extRem(12)};
  }
`;

export const icon = css`
  position: absolute;
  top: ${extRem(12)};
  right: ${extRem(16)};
  color: ${neutral.low};
`;

export const description = css`
  ${typography.body}
  display: flex;
  color: ${neutral.medium};
  margin: ${extRem(8)} 0 0;
  max-width: ${extRem(700)}
`;

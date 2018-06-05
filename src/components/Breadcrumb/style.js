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

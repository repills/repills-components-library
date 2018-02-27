import { css } from 'styled-components';
// import { grid } from 'styled-components-grid';
import theme from '../../config/theme';
import { MD } from '../../config/breakpoints';
import { extRem } from '../../utils';
// import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

export const base = css`
  padding: ${extRem(48,0,24)};
  border-bottom: 3px  solid ${neutral.medium};
  text-align: left;
`;

export const logoLink = css`
  width: ${extRem(150)};
  display: block;
  line-height: 0;
  
  &.${MD} {
    width: ${extRem(250)};
  }
`;

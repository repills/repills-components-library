import { css } from 'styled-components';
import { rgba } from 'polished';
import theme from '../../config/theme';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;
const mainColor = basic.primaryHighest;

export const base = css`
  background-color: ${mainColor};
  padding: ${extRem(28,20,32)};
  border-radius: 5px;
`;

export const icon = css``;

export const name = css`
  ${typography.header4}
  color: ${neutral.lowest};
  margin: ${extRem(16,0,0)};
`;

export const description = css`
  ${typography.small}
  color: ${rgba(neutral.lowest,.6)};
  margin: ${extRem(16,0,0)};
  height: ${extRem(80)};
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    height: ${extRem(40)};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, ${rgba(mainColor, 0)}, ${mainColor});
  }
`;

export const details = css`
  ${typography.body}
  color: ${rgba(neutral.lowest,.6)};
  margin: ${extRem(16,0,28)};
`;

export const detail = css`
  display: inline-block;
  margin: ${extRem(0,8)};
  line-height: 1;
`;

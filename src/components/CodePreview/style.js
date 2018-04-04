import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { ellipsis } from 'polished';

const { neutral, basic } = theme.palettes;


export const base = css`
  background-color: ${neutral.higher};
`;

export const header = css`
  display: flex;
  padding: ${extRem(8,12)};
  align-items: center;
  justify-content: space-between;
`;

export const title = css`
  ${typography.small}
  color: ${neutral.medium};
  ${ellipsis()}
`;

export const buttonCopy = css`
  ${typography.mini}
  color: ${neutral.higher};
  border-radius: 3px;
  padding: ${extRem(0,10)};
  background-color: ${basic.primary};
  height: ${extRem(28)};
  line-height: ${extRem(28)};
  display: flex;
  align-items: center;
  letter-spacing: .1em;
  box-sizing: border-box;
  cursor: pointer;
  flex-shrink: 1;
  margin-left: ${extRem(12)};
`;


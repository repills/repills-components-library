import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { arrowUp, arrowDown } from '../../shared/styles/caret';
import { ellipsis, stripUnit } from 'polished';

const { neutral, basic } = theme.palettes;


export const base = css`
  background-color: #222;
`;

export const header = css`
  display: flex;
  padding: ${extRem(8,12)};
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${neutral.higher};
`;

export const title = css`
  ${typography.small}
  color: ${neutral.mediumHigh};
   ${ellipsis()}
  span {
   
  }
`;

export const buttonCopy = css`
  ${typography.mini}
  color: ${neutral.lowest};
  padding: ${extRem(0,10)};
  background-color: ${basic.primary};
  height: ${extRem(28)};
  line-height: ${extRem(28)};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: .1em;
  box-sizing: border-box;
  cursor: pointer;
  flex-shrink: 1;
  margin-left: ${extRem(12)};
`;

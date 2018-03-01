import { css } from 'styled-components';
import { ellipsis, rgba } from 'polished';
import theme from '../../config/theme';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

export const base = css`
  ${typography.caption}
  text-decoration: none;
  padding: ${extRem(16, 12)};
  display: flex;
  align-items: center;
  background: ${neutral.lower};
  cursor: pointer;
  font-weight: normal;
  position: relative;
  
  &::after {
    background-color: ${props => props.color};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${extRem(3)};
  }
`;

export const icon = css`
  line-height: 0;
  color: ${neutral.highest};
  margin-right: ${extRem(10)};
`;

export const text = css`
  ${ellipsis()}
  line-height: 1;
  color: ${neutral.highest};
  text-transform: uppercase;
`;

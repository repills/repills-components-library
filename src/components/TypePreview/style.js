import { css } from 'styled-components';
import { ellipsis, rgba } from 'polished';
import theme from '../../config/theme';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

export const base = css`
  ${typography.body}
  text-decoration: none;
  padding: ${extRem(28, 10, 18)};
  display: block;
  align-items: center;
  line-height: 1;
  text-align: center;
  background: ${neutral.lower};
  cursor: pointer;
  // border: 1px solid ${neutral.medium};
  border-top: 0;
  position: relative;
  
  &::after {
    background-color: ${props => props.color};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${extRem(8)};
  }
`;

export const icon = css`
  font-size: ${extRem(50)};
  margin: 0 auto;
  line-height: 0;
  color: ${neutral.highest};
`;

export const text = css`
  ${ellipsis()}
  margin-top: ${extRem(15)};
  line-height: 1;
  color: ${neutral.highest};
  text-transform: uppercase;
`;

import { css } from 'styled-components';
import { ellipsis, rgba } from 'polished';
import theme from '../../config/theme';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

export const base = css`
  ${typography.body}
  text-decoration: none;
  padding: ${extRem(20, 10, 18)};
  display: block;
  align-items: center;
  line-height: 1;
  text-align: center;
  background: ${rgba(neutral.highest, .05)};
  border-top: 3px solid ${props => props.color};
  cursor: pointer;
  
  &:hover {
    background: ${rgba(neutral.highest, .07)};
  }
`;

export const icon = css`
  font-size: ${extRem(50)};
  margin: 0 auto;
  line-height: 0;
  color: ${basic.primaryHighest};
`;

export const text = css`
  ${ellipsis()}
  margin-top: ${extRem(15)};
  line-height: 1;
  color: ${basic.primaryHighest};
  text-transform: uppercase;
`;

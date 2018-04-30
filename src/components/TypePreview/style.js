import { css } from 'styled-components';
import { ellipsis } from 'polished';
import theme from '../../config/theme';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;

export const base = css`
  ${typography.body}
  color: ${props => props.active ? props.color : neutral.high};
  text-decoration: none;
  padding: ${extRem(8, 12, 8, 20)};
  display: flex;
  align-items: center;
  cursor: ${props => props.active ? 'default' : 'pointer'};
  position: relative;
  border-top: 1px solid ${neutral.low};
  user-select: none;
  font-weight: normal;

  &::after {
    background-color: ${props => props.color};
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    bottom: 0;
    width: ${extRem(4)};
  }
`;

export const icon = css`
  line-height: 0;
  opacity: ${props => props.active ? 1 : 0.4};
  margin-right: ${extRem(16)};
`;

export const text = css`
  ${ellipsis()}
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${extRem(32)};
  margin-bottom: -1px;
`;

export const count = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${extRem(12)};
  display: flex;
  align-items: center;
  opacity: ${props => props.active ? 1 : 0.4};
`;

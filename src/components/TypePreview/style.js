import { css } from 'styled-components';
import { ellipsis } from 'polished';
import theme from '../../config/theme';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;

export const base = css`
  ${typography.caption}
  color: ${props => props.active ? props.color : neutral.highest};
  text-decoration: none;
  padding: ${extRem(12, 12, 12, 24)};
  display: flex;
  align-items: center;
  cursor: ${props => props.active ? 'default' : 'pointer'};
  position: relative;
  border-top: 1px solid ${neutral.medium};
  user-select: none;
  
  &::after {
    background-color: ${props => props.color};
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    bottom: 0;
    width: ${extRem(8)};
  }
`;

export const icon = css`
  line-height: 0;
  opacity: ${props => props.active ? 1 : 0.4};
  margin-right: ${extRem(16)};
`;

export const text = css`
  font-weight: normal;
  ${ellipsis()}
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${extRem(32)};
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

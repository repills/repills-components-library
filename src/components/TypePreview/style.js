import { css } from 'styled-components';
import { ellipsis } from 'polished';
import theme from '../../config/theme';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;

export const base = css`
  ${typography.caption}
  color: ${neutral.highest};
  text-decoration: none;
  padding: ${extRem(12, 12, 12, 20)};
  display: flex;
  align-items: center;
  background: ${neutral.lower};
  cursor: pointer;
  position: relative;
  border-top: 1px solid ${neutral.medium};
  
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
  color: ${neutral.mediumHigh};
  margin-right: ${extRem(12)};
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
  color: ${neutral.mediumHigh};
`;

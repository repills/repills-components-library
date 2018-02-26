import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import { size, ellipsis, rgba } from 'polished';
import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { status, neutral } = palettes;

export const base = css`
  user-select: none;
  box-sizing: border-box;
  text-align: left;
  padding: ${extRem(24, 16)};
  border: 1px solid ${neutral.medium};
  cursor: pointer;
  background-color: ${props => props.checked ? neutral.lower : neutral.lowest};
  color: ${neutral.highest};
  box-shadow: 0 1px 2px 2px ${rgba(neutral.highest, 0.02)};
  position: relative;
  min-height: ${extRem(94)};
  display: flex;
  align-items: center;
  
  &::after {
    display: ${props => props.checked ? 'block' : 'none'};
    content: '';
    height: ${extRem(4)};
    bottom: -1px;
    left: -1px;
    right: -1px;
    position: absolute;
    background-color: ${status.ok};
  }
  
  &:hover {
    background-color: ${neutral.lower}
  }
`;

export const title = css`
  ${typography.body}
  margin: ${extRem(0,0,0,12)};
`;

export const selectButton = css`
  ${typography.small}
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

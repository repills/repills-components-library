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
  text-align: center;
  padding: ${extRem(24, 16)};
  border: 1px solid ${neutral.medium};
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  background-color: ${neutral.lowest};
  color: ${neutral.highest};
  box-shadow: 0 1px 2px 2px ${rgba(neutral.highest, 0.02)};
  position: relative;
  
  ${props => props.checked && `

  `}
  
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
`;

export const icon = css`
  ${size(extRem(52))}
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const name = css`
  ${typography.header4}
  ${ellipsis()}
  text-transform: uppercase;
  margin: ${extRem(12,0,0,0)};
`;

export const selectButton = css`
  ${typography.small}
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${extRem(12)} auto 0;
  width: ${extRem(140)};
  
  span {
    margin-left: ${extRem(8)};
  }
`;

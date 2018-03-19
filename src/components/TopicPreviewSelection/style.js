import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { status, neutral } = palettes;

export const base = css`
  user-select: none;
  box-sizing: border-box;
  text-align: left;
  padding: ${extRem(16)};
  border: 1px solid ${neutral.low};
  cursor: pointer;
  background-color: ${neutral.lowest};
  color: ${neutral.high};
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  
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
  
  ${props => props.checked && `
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  `}
  
  &:hover {
    background-color: ${neutral.lowest};
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  }
`;

export const title = css`
  ${typography.body}
  margin: ${extRem(0,0,0,12)};
`;

export const selectButton = css`
  ${typography.small}
  color: ${neutral.high};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import { size } from 'polished';
import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { basic, neutral } = palettes;

export const base = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${extRem(12)};
  background-color: ${neutral.lower};
  // box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
`;


export const button = css`
  ${typography.body}
  ${size(extRem(36))}
  outline: 0;
  border: 0;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${neutral.high};
  padding: 0;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid transparent;

  ${props => props.active && `
    background-color: ${basic.primary};
    color: ${neutral.lowest};
    position: relative;
    z-index: 1;
    border-color: ${basic.primary};
  `}
  
  ${props => props.disabled && `
    opacity: .4;
    cursor: default;
  `}
  
  ${props => !props.disabled && !props.active && `
    &:hover {
      border-color: ${neutral.low};
    }
  `}
  
  &:first-child {
    margin-left: 0;
  }
`;

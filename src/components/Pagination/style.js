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
`;


export const button = css`
  ${typography.body}
  ${size(extRem(34),extRem(34))}
  border: 1px solid ${basic.primary};
  outline: 0;
  background: none;
  margin-left: -1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${basic.primary};
  padding: 0;
  cursor: pointer;
  
  ${props => props.active && `
    background-color: ${basic.primary};
    color: ${neutral.lowest};
    
  `}
  
  ${props => props.disabled && `
    opacity: .4;
  `}
  
  &:first-child {
    margin-left: 0;
  }
`;

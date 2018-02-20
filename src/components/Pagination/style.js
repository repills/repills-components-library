import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import { size } from 'polished';
import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { basic, neutral } = palettes;

export const base = css`
  display: inline-flex;
  align-items: center;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
`;


export const button = css`
  ${typography.body}
  ${size(extRem(34),extRem(34))}
  border: 1px solid ${neutral.medium};
  outline: 0;
  background: none;
  margin-left: -1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${neutral.highest};
  padding: 0;
  cursor: pointer;
  
  ${props => props.active && `
    background-color: ${basic.primary};
    color: ${neutral.lowest};
    border: 1px solid ${basic.primary};
    position: relative;
    z-index: 1;
  `}
  
  ${props => props.disabled && `
    opacity: .4;
  `}
  
  &:first-child {
    margin-left: 0;
  }
`;

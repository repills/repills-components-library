import { css } from 'styled-components';
import { extRem } from '../../utils';
import { size, placeholder } from 'polished';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { basic, neutral, status } = palettes;

const variant = {
  'M': {
    height: extRem(44),
    sidePadding: extRem(12),
    maxWidth: extRem(200)
  },
  'L': {
    height: extRem(56),
    sidePadding: extRem(24),
    maxWidth: extRem(300)
  }
};

export const base = css`
  box-sizing: border-box;
  border: 1px solid ${neutral.low};
  border-bottom: 0;
  padding-bottom: 3px;
  width: ${props => props.expanded ? '100%' : variant[props.size].maxWidth};
  position: relative;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  
  &::after {
    content: '';
    height: 3px;
    position: absolute;
    bottom: 0;
    right: -1px;
    left: -1px;
    background-color: ${neutral.low};
    
    ${props => props.filled && `
      background-color: ${props.disabled ? neutral.low : basic.primary};
    `}    
    
    ${props => typeof(props.hasError) === 'boolean' && `
      background-color: ${props.hasError ? status.danger : status.ok};
    `}
  }
`;

export const icon = css`
  ${props => size(variant[props.size].height)}
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  
  color: ${props => props.hasError ? status.danger : status.ok};
`;

export const input = css`
  ${typography.body}
  box-sizing: border-box;
  border: 0;
  width: 100%;
  color: ${neutral.highest};
  height: ${props => variant[props.size].height};
  line-height: ${props => variant[props.size].height};
  padding: 0 ${props => variant[props.size].sidePadding};
  display: inline-flex;
  align-items: center;
  box-shadow: none;
  width: 100%;
  
  ${props => props.hasIcon && `
    padding-right: ${variant[props.size].height};
  `}
    
  ${props => (!props.disabled && !props.readOnly) && `
  &:hover {
    border-color: ${basic.primary};
  }`}
  
  &:focus {
    outline: 0;
    box-shadow: 0;
  }
  
  &::placeholder {
    color: ${neutral.medium};
  }
  
  ${props => (props.disabled || props.readOnly) && `
    background-color: ${neutral.lower};
  `}
`;

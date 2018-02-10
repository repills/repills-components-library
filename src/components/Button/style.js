import { stripUnit } from 'polished';
import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

const height = {
  M: extRem(40),
  L: extRem(60)
};

const minWidth = {
  M: extRem(150),
  L: extRem(220)
};

export const base = css`
  ${typography.body};
  align-items: center;
  background: none;
  // border-radius: ${props => stripUnit(height[props.size]) / 2}rem;
  border: 3px solid ${basic.primary};
  box-sizing: border-box;
  color: ${neutral.lowest};
  cursor: pointer;
  display: inline-flex;
  height: ${props => height[props.size]};
  justify-content: center;
  min-width: ${props => minWidth[props.size]};
  outline: none;
  padding: 0 ${extRem(30)};
  width: ${props => props.expanded ? '100%' : 'auto'};
  
  ${ props => !props.disabled && `
    &:hover {
      color: ${basic.secondary}
  }`}
  
  ${ props => !props.outline && `
    background-color: ${basic.primary};
    color: ${neutral.lowest};
  `}
  
  ${ props => props.disabled && `
    opacity: .5;
    cursor: default;
  `}
`;

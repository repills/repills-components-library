import { rem, stripUnit } from 'polished';
import { css } from 'styled-components';
import theme from '../../config/theme';
import { H4Style } from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

const height = {
  M: rem('40px'),
  L: rem('60px')
};

const minWidth = {
  M: rem('150px'),
  L: rem('220px')
};

export const base = css`
  ${H4Style};
  align-items: center;
  background: none;
  border-radius: ${props => stripUnit(height[props.size]) / 2}rem;
  border: 3px solid ${basic.primary};
  box-sizing: border-box;
  color: ${neutral.lowest};
  cursor: pointer;
  display: inline-flex;
  height: ${props => height[props.size]};
  justify-content: center;
  min-width: ${props => minWidth[props.size]};
  outline: none;
  padding: 0 ${rem('30px')};
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

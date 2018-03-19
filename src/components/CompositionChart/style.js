import { css } from 'styled-components';
import { darken } from 'polished';
import { extRem } from '../../utils';
import theme from '../../config/theme';
const { neutral } = theme.palettes;

export const base = css``;

export const composition = css`
  padding: ${extRem(0,12)};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: ${props => extRem(props.height)};
`;

export const compositionItem = css`
  background-color: ${neutral.lower};
  height: 100%;
  width: ${props => extRem(props.width)};
  margin-right: ${extRem(2)};
  
  position: relative;
  
  &::last-child {
    margin-right: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.color};
    height: ${props => props.percentage}%;
  }
`;

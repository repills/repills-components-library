import { css } from 'styled-components';
import theme from '../../config/theme';
import { size } from 'polished';
import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { basic, neutral } = palettes;

export const base = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const button = css`
  ${typography.body}
  ${size('2.25rem')}
  outline: 0;
  border: 0;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  color: ${neutral.higher};
  border-radius: 5px;

  ${props => props.active && `
    background-color: ${basic.tertiary};
    color: ${neutral.lowest};
    position: relative;
    z-index: 1;
  `}
  
  ${props => props.disabled && `
    opacity: .4;
    cursor: default;
  `}
  
  ${props => !props.disabled && !props.active && `
    &:hover {
      background-color: ${neutral.lower};
    }
  `}
  
  &:first-child {
    margin-left: 0;
  }
`;

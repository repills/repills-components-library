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
  padding-top: ${extRem(12)};
  border-top: 1px solid ${neutral.medium};
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
  text-decoration: none;
  color: ${neutral.high};

  ${props => props.active && `
    background-color: ${basic.primary};
    color: ${neutral.higher};
    position: relative;
    z-index: 1;
  `}
  
  ${props => props.disabled && `
    opacity: .4;
    cursor: default;
  `}
  
  ${props => !props.disabled && !props.active && `
    &:hover {
      background-color: ${neutral.low};
    }
  `}
  
  &:first-child {
    margin-left: 0;
  }
`;

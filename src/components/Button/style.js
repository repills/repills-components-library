import { stripUnit } from 'polished';
import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

const size = {
  S: {
    height: extRem(28),
    minWidth: extRem(100),
    padding: extRem(0, 20)
  },
  M: {
    height: extRem(40),
    minWidth: extRem(150),
    padding: extRem(0, 24)
  },
  L: {
    height: extRem(60),
    minWidth: extRem(220),
    padding: extRem(0, 32)
  }
};

const skin = {
  default: {
    backgroundColor: basic.primary,
    color: neutral.lowest,
    boxShadow: '0 2px 10px 0 rgba(0,0,0,0.3)'
  },
  skin: {
    color: neutral.highest
  },
  outline: {
    borderColor: basic.primary,
    color: neutral.highest
  }
};


const tp = {
  S: typography.small,
  M: typography.body,
  L: typography.body
};

export const base = css`
  box-sizing: border-box;
  align-items: center;
  border: 3px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  width: ${props => props.expanded ? '100%' : 'auto'};
  text-transform: uppercase;
  letter-spacing: .2em;
  
  ${props => size[props.size]};
 
  ${props => skin[props.skin]};
  
  ${props => tp[props.size]};
  
  ${props => props.autoWidth && `
    min-width: auto;
  `};
  
  ${props => props.skin === 'ghost' && `
    padding-left: 0;
    padding-right: 0;
    border: 0;
  `};
  
  ${ props => props.disabled && `
    opacity: .5;
    cursor: default;
  `}
`;

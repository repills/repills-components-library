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
    boxShadow: '0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08)',
    textTransform: 'uppercase',
    letterSpacing: '0.2em'
  },
  ghost: {
    color: neutral.highest,
    paddingLeft: 0,
    paddingRight: 0,
    border: 0,
    backgroundColor: 'transparent'
  },
  outline: {
    borderColor: neutral.medium,
    color: neutral.highest,
    textTransform: 'uppercase',
    letterSpacing: '0.2em'
  }
};

const skinHover = {
  default: {
    backgroundColor: basic.secondary,
    color: neutral.highest
  },
  ghost: {
    color: basic.primary,
    backgroundColor: 'transparent'
  },
  outline: {
    color: basic.primary,
    borderColor: basic.primary
  }
};

const skinDisabled = {
  default: {
    backgroundColor: neutral.medium,
    color: neutral.high,
    opacity: '0.5'
  },
  ghost: {
    opacity: '0.5'
  },
  outline: {
    opacity: '0.5'
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
  background: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  width: ${props => props.expanded ? '100%' : 'auto'};
  transition: all .3s ease-in-out;
  
  ${props => size[props.size]};
 
  ${props => skin[props.skin]};
  
  ${props => tp[props.size]};
  
  ${props => props.autoWidth && `
    min-width: auto;
  `};
  
  ${ props => props.disabled && skinDisabled[props.skin] }
  
  &:hover {
    ${ props => !props.disabled && skinHover[props.skin] }
  }
`;

import { darken } from 'polished';
import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

const mainHoverColor = darken(0.2, basic.primary);

const size = {
  S: {
    minHeight: extRem(28),
    lineHeight: extRem(20),
    minWidth: extRem(100),
    padding: extRem(4, 20)
  },
  M: {
    minHeight: extRem(40),
    lineHeight: extRem(24),
    minWidth: extRem(150),
    padding: extRem(8, 24)
  },
  L: {
    minHeight: extRem(60),
    lineHeight: extRem(28),
    minWidth: extRem(220),
    padding: extRem(16, 32)
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
    backgroundColor: mainHoverColor
  },
  ghost: {
    color: basic.primary,
    backgroundColor: 'transparent'
  },
  outline: {
    color: mainHoverColor,
    borderColor: mainHoverColor
  }
};

const skinDisabled = {
  default: {
    backgroundColor: neutral.medium,
    color: neutral.high,
    opacity: '0.5',
    boxShadow: 'none'
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
  M: typography.small,
  L: typography.body
};

export const base = css`
  box-sizing: border-box;
  align-items: center;
  border: 2px solid transparent;
  background: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  border-radius: 3px;
  outline: none;
  width: ${props => props.expanded ? '100%' : 'auto'};
  transition: all .3s ease-in-out;
  word-break: break-word;
  
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

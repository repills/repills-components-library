import { lighten } from 'polished';
import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

const mainHoverColor = lighten(0.2, basic.primary);

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
    color: neutral.higher,
    // boxShadow: '0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08)',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '0.1em'
  },
  ghost: {
    color: neutral.higher,
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: 600,
    border: 0,
    backgroundColor: 'transparent'
  },
  outline: {
    borderColor: neutral.low,
    color: neutral.higher,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
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
    borderColor: neutral.higher,
    boxShadow: '0 3px 6px rgba(0,0,0,.08)'
  }
};

const skinDisabled = {
  default: {
    backgroundColor: neutral.lower,
    color: neutral.medium,
    boxShadow: 'none'
  },
  ghost: {
    opacity: '0.6'
  },
  outline: {
    opacity: '0.6'
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
  border: 1px solid transparent;
  background: none;
  box-sizing: border-box;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  display: inline-flex;
  justify-content: center;
  border-radius: 3px;
  outline: none;
  width: ${props => props.expanded ? '100%' : 'auto'};
  transition: all .3s ease-in-out;
  word-break: break-word;
  
  ${props => size[props.size]};
   
  ${props => tp[props.size]};
  
  ${props => skin[props.skin]};
    
  ${props => props.autoWidth && `
    min-width: auto;
  `};
  
  ${ props => props.disabled && skinDisabled[props.skin] }
  
  &:hover {
    ${ props => !props.disabled && skinHover[props.skin] }
  }
  
  & + & {
    margin-left: ${extRem(12)};
  }
`;

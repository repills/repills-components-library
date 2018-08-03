import { lighten, darken, ellipsis } from 'polished';
import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

const mainHoverColor = lighten(0.2, basic.primary);

const size = {
  S: {
    minHeight: extRem(32),
    lineHeight: extRem(20),
    minWidth: extRem(100),
    padding: extRem(4, 20)
  },
  M: {
    minHeight: extRem(44),
    lineHeight: extRem(24),
    minWidth: extRem(200),
    padding: extRem(8, 24)
  },
  L: {
    minHeight: extRem(60),
    lineHeight: extRem(28),
    minWidth: extRem(250),
    padding: extRem(16, 32)
  }
};

const outlineBase = {
  borderColor: neutral.higher,
  color: neutral.higher,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em'
};

const boxShadow = '0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12)';

const skin = {
  default: {
    backgroundColor: neutral.higher,
    color: neutral.lowest,
    boxShadow,
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '0.1em'
  },
  primary: {
    backgroundColor: basic.primary,
    color: darken(0.2, basic.primary),
    boxShadow,
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '0.1em'
  },
  ghost: {
    color: neutral.higher,
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: 600,
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  outline: outlineBase,
  outlineLight: {
    ...outlineBase,
    color: neutral.lowest,
    borderColor: neutral.lowest
  },
  outlineTertiary: {
    ...outlineBase,
    color: basic.tertiary,
    borderColor: basic.tertiary
  }
};

const outlineBaseHover = {
  borderColor: basic.primary,
  boxShadow: '0 3px 6px rgba(0,0,0,.08)'
};

const skinHover = {
  default: {
    backgroundColor: neutral.highest
  },
  primary: {
    backgroundColor: mainHoverColor
  },
  ghost: {
    color: basic.primary,
    backgroundColor: 'transparent'
  },
  outline: outlineBaseHover,
  outlineLight: outlineBaseHover,
  outlineTertiary: outlineBaseHover
};

const skinDisabled = {
  default: {
    backgroundColor: neutral.lower,
    color: neutral.medium,
    boxShadow: 'none'
  },
  primary: {
    backgroundColor: neutral.lower,
    color: neutral.medium,
    boxShadow: 'none'
  },
  ghost: {
    opacity: '0.5'
  },
  outline: {
    opacity: '0.4'
  },
  outlineLight: {
    opacity: '0.4'
  },
  outlineTertiary: {
    opacity: '0.4'
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
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  display: inline-flex;
  justify-content: center;
  border-radius: 5px;
  outline: none;
  width: ${props => props.expanded ? '100%' : 'auto'};
  transition: all .3s ease-in-out;
  word-break: break-word;
  text-decoration: none;

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
 
  // https://github.com/styled-components/polished/issues/180
  ${props => props.ellipsis && css`${ellipsis()};`}
  
  & + & {
    margin-left: ${extRem(12)};
  }
`;

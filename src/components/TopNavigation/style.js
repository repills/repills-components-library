import { css } from 'styled-components';
import theme from '../../config/theme';
import { MD, LG } from '../../config/breakpoints';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

export const base = css`
  text-align: left;

  &.${MD} {
    padding: ${extRem(20,0)};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

export const logoContainer = css`
  background-color: ${neutral.lower};
  padding: ${extRem(16,0)};
  
  span {
    display: block;
    line-height: 0;
    margin: 0 auto;
    width: ${extRem(150)};
  }

  &.${MD} {
    padding: 0;
    background-color: transparent;
    
    a {
      width: ${extRem(220)};
    }
  }
`;

export const navigation = css`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  background-color: ${basic.lowest};
  color: ${neutral.high};
  
  &.${MD} {
    padding: 0;
    background-color: transparent;
    width: calc(100% - ${extRem(240)});
  }
  
  &.${LG} {
    flex-wrap: wrap;
  }
`;

export const navigationItem = css`
  ${typography.body}
  padding: ${extRem(0,12)};
  line-height: ${extRem(32)};
  height: ${extRem(44)};
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  color: currentColor;
  text-decoration: underline;
  cursor: pointer;
`;


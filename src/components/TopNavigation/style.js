import { css } from 'styled-components';
import theme from '../../config/theme';
import { MD, LG } from '../../config/breakpoints';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;

export const base = css`
  text-align: left;
  position: relative;
`;


export const wrapper = css`
  &.${MD} {
    padding: ${extRem(11,0)};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

export const logoContainer = css`
  padding: ${extRem(11,20)};
  
  span {
    display: block;
    line-height: 0;
    cursor: pointer;
    width: ${extRem(150)};
  }

  &.${MD} {
    padding: 0;
    
    span {
      width: ${extRem(160)};
    }
  }
`;

export const navigation = css`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  background-color: ${neutral.lowest};
  color: ${neutral.high};
  border-top: 1px solid ${neutral.low};
  
  &.${MD} {
    background-color: transparent;
    width: calc(100% - ${extRem(240)});
    border-left: 1px solid ${neutral.low};
    border-top: 0;
  }
  
  &.${LG} {
    flex-wrap: wrap;
  }
`;

export const navigationItem = css`
  ${typography.body}
  padding: ${extRem(0,20)};
  line-height: ${extRem(40)};
  height: ${extRem(40)};
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  color: currentColor;
  text-decoration: none;
  cursor: pointer;
`;


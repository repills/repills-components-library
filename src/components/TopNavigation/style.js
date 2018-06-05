import { css } from 'styled-components';
import { rgba } from 'polished';
import theme from '../../config/theme';
import { MD, LG } from '../../config/breakpoints';
import typography from '../../shared/styles/typography';
const { basic, neutral } = theme.palettes;

export const base = css`
  text-align: left;
  position: relative;
`;

export const wrapper = css`
  &.${MD} {
    padding: 0.68rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

export const logoContainer = css`
  padding: 0.68rem 1.25rem;
  
  span {
    display: block;
    line-height: 0;
    cursor: pointer;
    width: 7rem;
  }

  &.${MD} {
    padding: 0;
    
    span {
      width: 8rem;
    }
  }
`;

export const navigation = css`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  background-color: ${basic.secondary};
  color: ${neutral.high};
  border-top: 1px solid ${rgba(neutral.highest,.3)};
  
  &.${MD} {
    background-color: transparent;
    width: calc(100% - 15rem);
    border-left: 1px solid ${rgba(neutral.highest,.3)};
    border-top: 0;
  }
  
  &.${LG} {
    flex-wrap: wrap;
  }
`;

export const navigationItem = css`
  ${typography.body}
  padding: 0 1.25rem;
  line-height: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  color: ${neutral.lowest};
  text-decoration: none;
  cursor: pointer;
`;


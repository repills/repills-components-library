import { css } from 'styled-components';
import { rgba, size } from 'polished';
import { extRem } from '../../utils';
import theme from '../../config/theme';
const { neutral } = theme.palettes;

const sizes = {
  S: extRem(500),
  M: extRem(700),
  L: extRem(900)
};

const fixedPosition = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
 z-index: ${theme.zIndex.modal};
`;

export const base = css`
  ${fixedPosition}
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .3s ease-in-out;
  
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  opacity: ${props => props.open ? 1 : 0}
`;

export const overlay = css`
  ${fixedPosition}
  background-color: ${rgba(neutral.highest, .4)};
  
  ${props => props.closeOnClick && `
    cursor: pointer;
  `}
  z-index: 1;
`;

export const wrapper = css`
  box-sizing: border-box;
  padding: ${extRem(0,12)};
  max-width: ${props => sizes[props.size]};
  flex: 0 0 100%;
`;

export const modal = css`
 box-sizing: border-box;
 background-color: ${neutral.lowest};
 position: relative;
 width: 100%;
 z-index: 2;
`;

export const content = css`
  display: flex;
  flex-direction: column;
`;

export const header = css`
  padding: ${extRem(12)};
  height: ${extRem(40)};
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${neutral.medium};
`;

export const body = css`
  box-sizing: border-box;
  max-height: calc(100vh - ${extRem(180)});
  overflow-y: auto;
  margin: 0 auto;
  padding: ${extRem(12)};
  width: 100%;
`;

export const close = css`
  ${size(extRem(40))}
  box-sizing: border-box;
  color: ${neutral.highest};
  border: 1px solid ${neutral.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

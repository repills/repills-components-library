import { css } from 'styled-components';
import { rgba, size } from 'polished';
import { extRem } from '../../utils';
import theme from '../../config/theme';
const { basic, neutral } = theme.palettes;

const fixedPosition = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const base = css`
  ${fixedPosition}
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const overlay = css`
  ${fixedPosition}
  background-color: ${rgba(basic.primary, .7)};
  
  ${props => props.closeOnClick && `
    cursor: pointer;
  `}
`;

export const wrapper = css`
  box-sizing: border-box;
  padding: ${extRem(0,10)};
  max-width: ${extRem(600)};
  flex: 0 0 100%;
`;

export const modal = css`
 box-sizing: border-box;
 background-color: ${neutral.lowest};
 position: relative;
 box-shadow: ${extRem(0, 10, 10)} ${rgba(neutral.highest, .3)};
`;

export const content = css`
  display: flex;
  flex-direction: column;
`;

export const header = css`
  padding: ${extRem(10)};
  height: ${extRem(40)};
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${neutral.medium};
`;

export const body = css`
  box-sizing: border-box;
  max-height: calc(100vh - ${extRem(180)});
  overflow-y: auto;
  max-width: ${extRem(580)};
  margin: 0 auto;
  padding: ${extRem(10)};
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

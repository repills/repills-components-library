import { css } from 'styled-components';
import { lighten } from 'polished';
import { grid } from 'styled-components-grid';
import theme from '../../config/theme';
import { SM } from '../../config/breakpoints';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;

// box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
export const base = css`
  box-sizing: border-box;
  text-align: left;
  position: relative;
  cursor: pointer;
  background-color: ${neutral.lower};
  color: ${neutral.highest};
  height: 100%;
  min-height: ${extRem(70)};
  padding: ${extRem(12,16,16,12)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${typography.caption}
  
  ${props => props.disabled && `
    opacity: .6;
    cursor: default;
  `}
  
  &:hover {
    background-color: ${lighten(.01, neutral.lower)};
  }
`;

export const total = css`
  line-height: 1;
  color: ${neutral.medium};
  flex-shrink: 1;
  padding-left: ${extRem(16)};
  font-weight: 400;
`;

export const composition = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const title = css`
  color: ${neutral.high};
  font-weight: 600;
  overflow: hidden;
  line-height: 1.2;
  word-break: break-word;
  margin: 0;
`;



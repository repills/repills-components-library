import { css } from 'styled-components';
import { lighten, ellipsis } from 'polished';
import theme from '../../config/theme';
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
  color: ${neutral.higher};
  height: 100%;
  padding: ${extRem(12,16,12,12)};
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

export const title = css`
  ${typography.body}
  ${ellipsis()}
  overflow: hidden;
  line-height: 1.4;
  margin: 0;
  user-select: none;
`;



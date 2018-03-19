import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { arrowUp, arrowDown } from '../../shared/styles/caret';
import { ellipsis, stripUnit } from 'polished';

const { neutral } = theme.palettes;

const sizes = {
  M: {
    height: extRem(36),
    heightItem: extRem(32),
    sideSpace: extRem(12),
    width: extRem(200),
    arrowSize: '5px'
  },
  L: {
    height: extRem(56),
    heightItem: extRem(52),
    sideSpace: extRem(24),
    width: extRem(300),
    arrowSize: '7px'
  }
};

export const base = css`
  ${typography.body}
  position: relative;
  box-sizing: border-box;
  width: ${props => props.expanded ? '100%' : sizes[props.size].width};
  display: inline-flex;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  cursor: pointer;
  
  ${props => props.disabled && `
    cursor: default;
  `}
`;

export const selected = css`
  user-select: none;
  background-color: ${neutral.lowest};
  box-sizing: border-box;
  height: ${props => sizes[props.size].height};
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 ${props => sizes[props.size].sideSpace};
  position: relative;
  z-index: 1;
  border: 1px solid ${neutral.low};
  color: ${props => props.filled ? neutral.highest : neutral.medium};
  
  &::after {
    display: ${props => (props.disabled && props.filled) ? 'none' : 'block'};
    content: '';
    ${props => props.open ? arrowUp(sizes[props.size].arrowSize) : arrowDown(sizes[props.size].arrowSize)}
    margin-left: ${extRem(10)};
    color: ${ props => props.disabled ? neutral.medium : neutral.high }
  }

  ${props => props.disabled && `
    background-color: ${neutral.lower};
  `}
`;

export const selectedText = css`
  ${ellipsis()}
  text-align: left;
`;

export const list = css`
  user-select: none;
  position: absolute;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  background-color: ${neutral.lowest};
  top: ${props => sizes[props.size].height};
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.inpage};
  max-height: ${props => props.count >= 7 ? stripUnit(sizes[props.size].heightItem) * 4.5 + 'rem' : 'auto'};
  overflow-y: auto;
  border-bottom: 1px solid ${neutral.low};
`;

export const item = css`
  color: ${neutral.highest};
  box-sizing: border-box;
  background-color: ${neutral.lowest};
  border: 1px solid ${neutral.low};
  padding: 0 ${props => sizes[props.size].sideSpace};
  height: ${props => sizes[props.size].heightItem};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: -1px;
  
  &:last-child {
    border-bottom: 0;
  }
  
  ${props => !props.disabled && `
    &:hover {
      background-color: ${neutral.lower};
    }
  `}
  
  ${props => props.disabled && `
    cursor: default;
    color: ${neutral.medium};
  `}
`;

export const itemText = css`
  ${ellipsis()}
  text-align: left;
`;

export const checkIcon = css`
  margin-left: ${extRem(8)};
`;



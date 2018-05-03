import { css } from 'styled-components';
import { extRem } from '../../utils';
import { gridItem } from '../../shared/styles';
import { SM, LG } from '../../config/breakpoints';

const halfGutterStripUnit = 4;
const gutter = extRem(halfGutterStripUnit * 2);
const halfGutter = extRem(halfGutterStripUnit);
const doubleGutter = extRem(halfGutterStripUnit * 4);

export const items = css`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${halfGutter};
  margin-right: -${halfGutter};
  
  ${props => props.breakpointsStatus[SM] && `
    margin-left: -${gutter};
    margin-right: -${gutter};
  `}
`;

export const item = css`
  box-sizing: border-box;
  
  ${props => !props.breakpointsStatus[SM] && gridItem(props.count, 2, halfGutter, doubleGutter)}
  
  ${props => props.breakpointsStatus[SM] && !props.breakpointsStatus[LG] && gridItem(props.count, 4, gutter, doubleGutter)}
  
  ${props => props.breakpointsStatus[LG] && gridItem(props.count, 8, gutter, doubleGutter)}
`;

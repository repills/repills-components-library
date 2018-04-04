import { css } from 'styled-components';
import { extRem } from '../../utils';
import { gridItem } from '../../shared/styles';
import { SM, LG } from '../../config/breakpoints';
import theme from '../../config/theme';

const { neutral } = theme.palettes;

const halfGutterStripUnit = 8;
const gutter = extRem(halfGutterStripUnit * 2);
const doubleGutter = extRem(halfGutterStripUnit * 4);
const halfGutter = extRem(halfGutterStripUnit);

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
  padding-top: ${extRem(12)};
  padding-bottom: ${extRem(12)};
  
  ${props => !props.breakpointsStatus[SM] && gridItem(props.count, 1, halfGutter, gutter)}
  
  ${props => props.breakpointsStatus[SM] && !props.breakpointsStatus[LG] && `
    ${gridItem(props.count, 2, gutter, doubleGutter)}
    
    &:nth-child(2n+1) {
      border-right: 1px solid ${neutral.low};
    }
  `}
  
  ${props => props.breakpointsStatus[LG] && `
    ${gridItem(props.count, 3, gutter, doubleGutter)}
    border-right: 1px solid ${neutral.low};
        
    &:nth-child(3n) {
      border-right: 0;
    }
  `}
  
  &:last-child {
    border-right: 0;
  }
`;

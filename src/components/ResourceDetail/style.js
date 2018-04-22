import { css } from 'styled-components';
import theme from '../../config/theme';
import { ellipsis } from 'polished';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
const mainColor = neutral.lower;

export const base = css`
  text-align: left;
  background-color: ${neutral.lowest};
`;

export const mainInfo = css`
  padding: ${extRem(20)};
  background-color: ${mainColor};
`;

export const mainInfoTop = css`
  ${typography.small}
  color: ${neutral.high};
  display: flex;
  align-items: center;
  line-height: 1;
  justify-content: space-between;
`;

export const mainInfoBottom = css`
  ${typography.small}
  color: ${neutral.high};
  display: flex;
  align-items: center;
`;

export const source = css`
  ${typography.small}
  display: flex;
  align-items: center;
  line-height: 1;
  
  span {
    margin-left: ${extRem(5)};
  }
`;

export const author = css`
  ${ellipsis()};
  
  span {
    margin-left: ${extRem(5)};
  }
`;

export const title = css`
  ${typography.header4}
  color: ${neutral.highest};
  margin: ${extRem(20, 0, 12)};
  line-height: 1.3;
  cursor: pointer;
`;

export const secondaryInfo = css`
  border: 2px solid ${neutral.lower};
  border-top: 0;
`;

export const type = css`
  ${typography.mini}
  line-height: 1;
  display: inline-flex;
  align-items: center;
  margin-right: ${extRem(8)};
  
  
  span {
    color: ${neutral.lowest};
    background-color: ${props => props.color};
    margin-left: 1px;
    white-space: nowrap;
    height: ${extRem(16)};
    line-height: ${extRem(16)};
    padding: ${extRem(0,8)};
  }
`;

export const date = css`
  margin-left: ${extRem(8)};
  flex: 1 0 auto;
  
  span {
    margin-left: ${extRem(8)};
  }
`;

export const detail = css`
  ${typography.small}
  color: ${neutral.high};
  padding: ${extRem(16,20)};
  border-top: 1px solid ${neutral.lower};
  
  &:first-child {
    border-top: 0;
  }
  
  a, span {
    text-decoration: underline;
    margin-left: ${extRem(12)};
    color: currentColor;
    cursor: pointer;
  }
`;

export const actions = css`
  padding: ${extRem(16, 20)};
  margin-top: -1px;
  background-color: ${neutral.lower};
  display: flex;
  justify-content: space-between;
`;


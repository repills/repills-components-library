import { css } from 'styled-components';
import theme from '../../config/theme';
import { rgba, ellipsis } from 'polished';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;
const mainColor = basic.primary;

export const base = css`
  text-align: left;
  background-color: ${neutral.lowest};
  border-top: 4px solid ${props => props.color};
  box-shadow: 0 1px 2px 2px ${rgba(neutral.highest, 0.02)};
`;

export const mainInfo = css`
  padding: ${extRem(12,12,24)};
  background-color: ${mainColor};
`;

export const mainInfoTop = css`
  ${typography.small}
  color: ${neutral.medium};
  display: flex;
  align-items: center;
  line-height: 1;
  justify-content: space-between;
`;

export const mainInfoBottom = css`
  ${typography.small}
  color: ${neutral.medium};
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
  ${ellipsis()}
  
  span {
    color: ${neutral.lowest};
    margin: ${extRem(0,5)};
  }
`;

export const title = css`
  ${typography.header3}
  color: ${neutral.lowest};
  margin: ${extRem(16, 0)};
  cursor: pointer;
`;

export const secondaryInfo = css`
  border: 1px solid ${neutral.medium};
  border-top: 0;
`;

export const type = css`
  color: ${neutral.lowest};
  display: inline-flex;
  align-items: center;
  line-height: 1;
  
  span {
    margin-left: ${extRem(5)};
  }
`;

export const date = css`
  margin-left: ${extRem(8)};
  flex: 1 0 auto;
`;

export const detail = css`
  ${typography.small}
  color: ${neutral.high};
  padding: ${extRem(12)};
  border-top: 1px dotted ${neutral.medium};
  
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
  padding: ${extRem(12)};
  border: 1px solid ${neutral.medium};
  margin-top: -1px;
  background-color: ${rgba(neutral.medium,0.2)};
`;


import { css } from 'styled-components';
import theme from '../../config/theme';
import { rgba, ellipsis } from 'polished';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;
const mainColor = neutral.lower;

export const base = css`
  text-align: left;
  background-color: ${neutral.lowest};
  border-top: 4px solid ${props => props.color};
`;

export const mainInfo = css`
  padding: ${extRem(12,12,24)};
  background-color: ${mainColor};
  border: 1px solid ${neutral.low};
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
  ${ellipsis()}
  
  span {
    margin: ${extRem(0,5)};
  }
`;

export const title = css`
  ${typography.header3}
  color: ${neutral.highest};
  margin: ${extRem(16, 0)};
  cursor: pointer;
`;

export const secondaryInfo = css`
  border: 1px solid ${neutral.low};
  border-top: 0;
`;

export const type = css`
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
  border-top: 1px dotted ${neutral.low};
  
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
  border: 1px solid ${neutral.low};
  margin-top: -1px;
  background-color: ${neutral.lower};
  display: flex;
  justify-content: space-between;
`;


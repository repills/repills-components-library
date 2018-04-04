import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
export const base = css`
  text-align: left;
`;

export const title = css`
  ${typography.header4}
  color: ${neutral.higher};
  border-bottom: 1px solid ${neutral.low};
  padding-bottom: ${extRem(16)};
  margin: 0;
`;

export const items = css`
  margin-top: ${extRem(16)};
`;

export const item = css`
  ${typography.body}
  display: flex;
  align-items: center;
  position: relative;
  padding: ${extRem(8)} 0;
  color: ${neutral.higher};
  text-decoration: none;
  cursor: pointer;
  
  span {
    margin: 0 ${extRem(8)};
    color: ${neutral.higher};
  }
  
  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

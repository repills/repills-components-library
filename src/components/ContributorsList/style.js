import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
export const base = css`
  text-align: left;
`;

export const title = css`
  ${typography.caption}
  color: ${neutral.higher};
  margin: 0;
`;

export const items = css`
  margin-top: ${extRem(16)};
`;

export const item = css`
  ${typography.small}
  display: flex;
  align-items: center;
  position: relative;
  padding: ${extRem(8)};
  border-radius: 5px;
  background-color: ${neutral.lower};
  color: ${neutral.higher};
  text-decoration: none;
  cursor: pointer;
  margin-top: 0.5rem;
  
  &:first-item {
    margin-top: 0;
  }
  
  span {
    margin: 0 ${extRem(8)};
    color: ${neutral.higher};
  }
`;

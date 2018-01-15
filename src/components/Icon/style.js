import { css } from 'styled-components';

export const base = css`
  display: block;
  line-height: 0;
  
  & > svg {
    fill: currentColor;
    height: 1em;
    width: 1em;
  }
`;

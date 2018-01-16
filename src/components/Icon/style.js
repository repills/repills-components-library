import { css } from 'styled-components';

export const base = css`
  display: block;
  line-height: 0;
  font-size: ${props => props.size}px;
  
  & > svg {
    height: 1em;
    width: 1em;
  }
`;

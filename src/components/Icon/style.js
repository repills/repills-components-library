import { css } from 'styled-components';
import { extRem } from '../../utils';

export const base = css`
  display: block;
  line-height: 0;
  font-size: ${props => extRem(props.size)};
  
  & > svg {
    height: 1em;
    width: 1em;
  }
`;

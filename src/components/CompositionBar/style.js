import { css } from 'styled-components';
import { extRem } from '../../utils';

export const base = css``;

export const composition = css`
  display: flex;
  overflow: hidden;
`;

export const compositionItem = css`
  height: ${props => extRem(props.height)};  
  position: relative;  
  width: ${props => props.percentage}%;
  background-color: ${props => props.color};
`;

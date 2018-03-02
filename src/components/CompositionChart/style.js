import { css } from 'styled-components';
import { extRem } from '../../utils';

export const base = css``;

export const composition = css`
  padding: ${extRem(0,12)};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: ${props => extRem(props.height)};
`;

export const compositionItem = css`
  background-color: ${props => props.color};
  height: ${props => props.percentage}%;
  width: ${props => extRem(props.width)};
  margin-right: ${extRem(3)};
  
  &::last-child {
    margin-right: 0;
  }
`;

import { css } from 'styled-components';
import { rem } from 'polished';

export const base = css`
  border: 1px solid #ddd;
  display: inline-block;
`;

export const color = css`
  width: ${rem('180px')};
  height: ${rem('120px')};
  position: relative;
`;

export const hex = css`
  color: #333;
  font-size: ${rem('12px')};
`;

export const identifier = css`
  color: #333;
  margin-top: ${rem('10px')};
  font-size: ${rem('12px')};
`;

export const info = css`
  padding: ${rem('8px')} ${rem('10px')};
`;

export const name = css`
  font-size: ${rem('12px')};
`;


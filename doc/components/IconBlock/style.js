import { css } from 'styled-components';
import { rem } from 'polished';

export const base = css`
  border: 1px solid #ddd;
  display: inline-block;
  text-align: center;
  width: ${rem('160px')};
`;

export const preview = css`
  height: ${rem('140px')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const identifier = css`
  color: #333;
  margin-top: ${rem('10px')};
  font-size: ${rem('12px')};
`;

export const info = css`
  padding: ${rem('15px')} ${rem('10px')};
  border-top: 1px solid #eee;
`;

export const name = css`
  margin: 0;
`;


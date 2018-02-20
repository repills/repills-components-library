import { css } from 'styled-components';

export const arrowUp = size => css`
  width: 0;
  height: 0;
  border-left: ${size} solid transparent;
  border-right: ${size} solid transparent;
  border-bottom: ${size} solid currentColor;
`;

export const arrowDown = size => css`
  width: 0;
  height: 0;
  border-left: ${size} solid transparent;
  border-right: ${size} solid transparent;
  border-top: ${size} solid currentColor;
`;

export const arrowRight = size => css`
  width: 0;
  height: 0;
  border-left: ${size} solid transparent;
  border-right: ${size} solid transparent;
  border-top: ${size} solid currentColor;
`;

export const arrowLeft = size => css`
  width: 0;
  height: 0;
  border-top: ${size} solid transparent;
  border-bottom: ${size} solid transparent;
  border-right: ${size} solid currentColor;
`;





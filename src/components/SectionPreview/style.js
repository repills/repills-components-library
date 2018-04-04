import { css } from 'styled-components';
import { rgba } from 'polished';
import theme from '../../config/theme';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
const mainColor = neutral.lowest;

// box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);

export const base = css`
  background-color: ${mainColor};
  text-align: center;
  
  ${props => !props.disabled && `
    &:hover {
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
    }
  `};
`;

export const icon = css``;

export const cover = css`
  background-color: ${neutral.lower};
  padding: ${extRem(28,16)};
  border: 1px solid ${neutral.low};
  border-bottom: 0;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`;

export const info = css`
  border: 1px solid ${neutral.low};
  border-top: 0;
  padding: ${extRem(24,16,28)};
`;

export const name = css`
  ${typography.header3}
  color: ${neutral.higher};
  margin: ${extRem(16,0,0)};
  line-height: 1;
`;

export const description = css`
  ${typography.small}
  color: ${neutral.high};
  margin: 0;
  height: ${extRem(63)};
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    height: ${extRem(21)};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, ${rgba(mainColor, 0)}, ${mainColor});
  }
`;

export const details = css`
  ${typography.small}
  color: ${neutral.medium};
  margin: ${extRem(20,0)};
  height: ${extRem(30)};
    display: flex;
`;

export const detail = css`
  width: 50%;
  text-transform: uppercase;
  padding: ${extRem(0,12)};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: ${extRem(30)};
  line-height: 1;
  border-top: 1px solid ${neutral.low};
  
  strong {
    color: ${neutral.high};
    margin-right: ${extRem(8)};
  }
  
  &:last-child {
    border-left: 1px solid ${neutral.low};
  }
`;

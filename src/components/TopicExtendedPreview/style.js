import { css } from 'styled-components';
import { rgba, size } from 'polished';
import theme from '../../config/theme';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
const mainColor = neutral.lowest;

export const base = css`
  text-align: left;
  position: relative;
  
  &:hover {
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  }
`;

export const cover = css`
  padding: ${extRem(20,60,20,20)};
  background-color: ${neutral.higher};
  position: relative;
`;

export const icon = css`
  ${size(extRem(54))}
  position: absolute;
  top: ${extRem(10)};
  color: ${neutral.medium};
  right: ${extRem(10)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const title = css`
  ${typography.body}
  color: ${neutral.lowest};
  font-weight: 600;
  overflow: hidden;
  line-height: 1.4;
  height: 2.8rem;
  word-break: break-word;
  margin: 0;
  user-select: none;
`;

export const description = css`
  ${typography.mini}
  color: ${neutral.high};
  height: ${extRem(57)};
  overflow: hidden;
  position: relative;
  margin: 0 0 ${extRem(12)} 0;
  user-select: none;

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

export const body = css`
  padding: 1rem;
  border: 1px solid ${neutral.low};
  border-top: 0;
`;

export const footer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const total = css`
  ${typography.small}
  color: ${neutral.medium};
  text-transform: uppercase;
  line-height: 1;
  user-select: none;

  strong {
    color: ${neutral.high};
    margin-right: ${extRem(8)};
  }
`;




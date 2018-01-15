import { css } from 'styled-components';
import { lighten, rgba, rem } from 'polished';
import theme from '../../config/theme';
import { H4Style } from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;

export const base = css`
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
  text-align: center;
  background: linear-gradient(to bottom, ${lighten(0.05, basic.primaryHighest)}, ${lighten(0.2, basic.primaryHighest)});
  color: ${neutral.lowest};
  
  &:hover {
    
  }
`;

export const frame = css`
  position: relative;
  z-index: 2;
  display: block;
  text-decoration: none;
  text-shadow: ${rgba(neutral.highest, 0.4)} 0 1px 2px;
  opacity: .9;
  border: 2px solid ${rgba(basic.primary, 0.2)};
`;

export const counter = css`
  padding: ${rem('40px')} 0;
  text-transform: uppercase;
  opacity: .9;
`;

export const total = css`
  font-size: ${rem('45px')};
`;

export const totalLabel = css`
  font-size: ${rem('10px')};
  margin-top: ${rem('7px')};
  letter-spacing: .2em;
`;

export const bottom = css`
  height: ${rem('120px')};
  position: relative;
`;

export const title = css`
  ${H4Style}
  padding: 0 ${rem('10px')} ${rem('25px')};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
`;

export const composition = css`
  font-size: ${rem('16px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

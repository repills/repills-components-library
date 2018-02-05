import { css } from 'styled-components';
import { darken, rem } from 'polished';
import theme from '../../config/theme';
import { H4Style } from '../../shared/styles/typography';
import { XS } from '../../config/breakpoints';

const { basic, neutral } = theme.palettes;

export const base = css`
  ${H4Style}
  text-decoration: none;
  padding: 20px 10px;
  display: block;
  align-items: center;
  line-height: 1;
  text-align: center;
  background: ${darken(0.05, basic.primary)};
  border-top: 5px solid ${props => props.color};
  outline: 1px solid ${neutral.highest};
  cursor: pointer;
  
  &:hover {
    background: ${basic.primary};
  }
`;

export const icon = css`
  font-size: ${rem('50px')};
  margin: 0 auto;
  line-height: 0;
  color: ${basic.primaryHighest}; 
  opacity: .75;
  
  &.${XS} {
    font-size: ${rem('62px')};
  }
`;

export const text = css`
  margin-top: 15px;
  line-height: 1;
  color: ${basic.primaryHighest}; 
`;

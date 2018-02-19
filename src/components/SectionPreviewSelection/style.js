import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import { size, ellipsis } from 'polished';
import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { basic, neutral } = palettes;

export const base = css`
  box-sizing: border-box;
  text-align: center;
  padding: ${extRem(20, 16)};
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  background-color: ${neutral.lower};
  color: ${neutral.highest};
  
  ${props => props.checked && `
    background-color: ${basic.primary};
    color: ${neutral.lowest};
  `}
`;

export const icon = css`
  ${size(extRem(50),extRem(50))}
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const name = css`
  ${typography.header4}
  ${ellipsis()}
  text-transform: uppercase;
  margin: ${extRem(12,0,0,0)};
`;

export const selectButton = css`
  ${typography.small}
  display: inline-flex;
  align-items: center;
  margin-top: ${extRem(12)};
  
  span {
    margin-left: ${extRem(8)};
  }
`;

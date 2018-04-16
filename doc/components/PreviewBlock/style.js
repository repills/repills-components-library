import { css } from 'styled-components';
import { extRem } from '../../../src/utils';
import typography from '../../../src/shared/styles/typography';
import theme from '../../../src/config/theme';

const { palettes } = theme;
const { basic, neutral } = palettes;

export const base = css`
  text-align: center;
`;

export const example = css`
  display: inline-block;
  max-width: 100%;
  
`;

export const exampleHeader = css`
  ${typography.small}
  color: ${neutral.high};
  align-items: center;
  background-color: ${neutral.lower};
  border: 1px solid ${neutral.low};
  border-bottom: none;
  border-radius: 3px 3px 0 0;
  display: flex;
  height: ${extRem(32)};
  justify-content: flex-start;
  padding-left: ${extRem(16)};
`;

export const exampleBody = css`
  padding: ${extRem(16)};
  border: 1px solid ${neutral.low};
  overflow-y: auto;
  background-color: ${neutral.lowest};
  
  ${props => props.skin === 'dark' && `
    border-color: ${neutral.highest};
    background-color: ${neutral.highest};
  `}
`;

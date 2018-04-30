import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { SM } from '../../config/breakpoints';

const { palettes } = theme;
const { basic, neutral } = palettes;
const gutter = extRem(30);

export const base = css`
  text-align: left;
  box-sizing: border-box;
  width: 100%;
`;

export const content = css`
  display: flex;
  flex-wrap: wrap;

  ${props => props.breakpointsStatus[SM] && `
    margin-left: -${gutter};
    margin-right: -${gutter};
  `}
`;

export const action = css`
  margin-top: ${extRem(12)};
`;

export const logo = css`
  max-width: ${extRem(140)};
`;

export const intro = css`
  ${typography.small}
  color: ${neutral.lowest};
  margin: ${extRem(20)} 0 0 0;
  max-width: ${extRem(400)};
  
  a {
    text-decoration: underline;
    color: ${basic.primary};
  }
`;

export const form = css`
  max-width: ${extRem(350)};
  margin: 0 auto;
`;

export const note = css`
  ${typography.mini}
  color: ${neutral.medium};
  margin: ${extRem(16)} 0 0 0;
`;

export const commonWrapper = css`

  &:last-child {
    margin-top: ${extRem(28)};
  }

  ${props => props.breakpointsStatus[SM] && `
    padding-left: ${gutter};
    padding-right: ${gutter};
    flex-basis: 50%;
    max-width: 50%;
    box-sizing: border-box;
    
    &:last-child {
      margin-top: 0;
      border-left: 1px solid rgba(0,0,0,.4);
    }
  `}
`;



import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { MD } from '../../config/breakpoints';

const { palettes } = theme;
const { neutral } = palettes;
const gutter = extRem(12);

export const base = css`
  text-align: left;
  box-sizing: border-box;
  width: 100%;
`;

export const content = css`
  display: flex;
  flex-wrap: wrap;
  
  ${props => props.breakpointsStatus[MD] && `
    margin-left: -${gutter};
    margin-right: -${gutter};
  `}
`;

export const action = css`
  margin-top: ${extRem(20)};
`;

export const logo = css`
  max-width: ${extRem(180)};
`;

export const intro = css`
  ${typography.small}
  color: ${neutral.lowest};
  margin: ${extRem(28)} 0 0 0;
  max-width: ${extRem(380)};
`;

export const label = css`
  ${typography.header4}
  color: ${neutral.lowest};
  display: block;
  line-height: 1.3;
`;

export const form = css`
  max-width: ${extRem(350)};
  margin-top: ${extRem(32)};
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

  ${props => props.breakpointsStatus[MD] && `
    padding-left: ${gutter};
    padding-right: ${gutter};
    flex-basis: 50%;
    max-width: 50%;
    box-sizing: border-box;
    
    &:last-child {
      margin-top: 0;
    }
  `}
`;



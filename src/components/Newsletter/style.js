import { css } from 'styled-components';
import { rgba } from 'polished';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { MD } from '../../config/breakpoints';

const { palettes } = theme;
const { basic, neutral } = palettes;
const gutter = '2rem';

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

export const logo = css`
  width: 2.3rem;
  position: absolute;
  top: 2px;
  left: 0;
`;

export const intro = css`
  ${typography.small}
  color: ${neutral.lowest};
  margin: 0;
  max-width: 25rem;
  padding-left: 4rem;
  
  a {
    text-decoration: underline;
    color: ${basic.primary};
  }
`;

export const form = css`
  max-width: 25rem;
  margin: 0 auto;
`;

export const introWrapper = css`
  position: relative;
`;

export const note = css`
  ${typography.mini}
  color: ${rgba(neutral.lowest,.9)};
  margin: 1rem 0 0 0;
`;

export const fieldGroup = css`
  display: flex;
  
  button {
    margin-left: 0.25rem;
    flex-shrink: 0;
  }
`;

export const commonWrapper = css`
  
  &:last-child {
    margin-top: 1.5rem;
  }

  ${props => props.breakpointsStatus[MD] && `
    padding-left: ${gutter};
    padding-right: ${gutter};
    flex-basis: 50%;
    max-width: 50%;
    box-sizing: border-box;
    
    &:last-child {
      margin-top: 0;
      border-left: 1px solid ${rgba(neutral.highest,.3)};
    }
  `}
`;



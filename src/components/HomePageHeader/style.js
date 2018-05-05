import { css } from 'styled-components';
import theme from '../../config/theme';
import { rgba } from 'polished';
import typography from '../../shared/styles/typography';
import { MD, LG } from '../../config/breakpoints';
const { basic, neutral } = theme.palettes;

export const base = css`
  position: relative;
  text-align: left;
`;

export const content = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const title = css`
  ${typography.header3}
  color: ${neutral.lowest};
  margin: 0;
  font-weight: 400;
  
  ${props => props.breakpointsStatus[LG] && `
    ${typography.header2}
    font-weight: 400;
  ` }
`;

export const description = css`
  ${typography.body}
  color: ${rgba(neutral.lowest, .9)};
  line-height: 1.5;
  max-width: 40rem;
  margin: 1.5rem 0 0;
`;

export const typeList = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem -1rem 0;
  
  > div {
    padding: 0 1rem;
    flex-basis: 25%;
    max-width: 25%;
    box-sizing: border-box;
  }
  
  ${props => props.breakpointsStatus[MD] && `
    > div {
      flex-basis: 12.5%;
      max-width: 12.5%;
    }
  `}
  
  ${props => props.breakpointsStatus[LG] && `
    justify-content: center;
    margin-top: -1.25rem;
    max-width: 25rem;
    
    > div {
      flex-basis: 25%;
      max-width: 25%;
    }
  `}
`;

export const typeBlock = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${rgba(basic.primary, .9)};
  margin-top: 1.25rem;

  span {
    ${typography.mini}
    color: ${rgba(neutral.lowest, .9)};
    margin-top: 0.75rem;
    line-height: 1;
  }
`;

export const box = css`
  flex-basis: 100%;
  max-width: 100%;
  box-sizing: border-box;

  ${props => props.breakpointsStatus[LG] && `
    flex-basis: 50%;
    max-width: 50%;
    
    &:last-child {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-left: 1rem;
    }
  `}
`;



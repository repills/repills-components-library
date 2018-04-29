import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { MD, LG } from '../../config/breakpoints';

const { basic, neutral } = theme.palettes;

export const base = css`
  padding: ${extRem(44)} 0;
  text-align: left;
  position: relative;
  
  ${props => props.breakpointsStatus[MD] && `
    text-align: center;
    padding: ${extRem(52, 0, 72)};
  `}
`;

export const title = css`
  ${typography.header2}
  color: ${neutral.lowest};
  margin: 0;
  line-height: 1.1;
  font-weight: 600;
  
  strong {
    color: ${basic.primary};
  }
  
  ${props => props.breakpointsStatus[LG] && typography.header1 }
  
  ${props => props.breakpointsStatus[MD] && `
    margin-top: ${extRem(32)};
  `}
`;

export const subTitle = css`
  ${typography.header4}
  color: ${neutral.medium};
  font-weight: 500;
  line-height: 1.2;
  margin: ${extRem(20)} 0 0;
  
  strong {
    font-weight: bold;
  }
`;

export const description = css`
  ${typography.body}
  color: ${neutral.medium};
  line-height: 1.5;
  max-width: ${extRem(650)};
  margin: ${extRem(40)} 0 0;
  
  ${props => props.breakpointsStatus[MD] && `
      margin: ${extRem(48)} auto 0;
  `}
`;

export const typeList = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: ${extRem(40)};
    
  > div + div {
    margin-left: ${extRem(20)};
  }
  
  ${props => props.breakpointsStatus[MD] && `
    justify-content: center;
    
    > div + div {
      margin-left: ${extRem(32)};
    }
  `}
`;

export const typeBlock = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${basic.primaryHighest};
  
  span {
    ${typography.mini}
    color: ${neutral.medium};
    margin-top: ${extRem(12)};
    line-height: 1;
  }
`;

export const logo = css`
  display: none;
  
  ${props => props.breakpointsStatus[MD] && `
    display: block;
    max-width: ${extRem(180)};
    margin: 0 auto;
  `}
`;

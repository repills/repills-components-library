import { css, keyframes } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { MD, LG } from '../../config/breakpoints';

const { basic, types, neutral } = theme.palettes;

const bouncing = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.8;
    transform: translateY(-1rem);
  }
`;

const pillSettings = {
  1: {
    color: types.article,
    animationDelay: '0'
  },
  2: {
    color: basic.primary,
    animationDelay: '0.2s',
    margin: extRem(0, 16)
  },
  3: {
    color: types.video,
    animationDelay: '0.4s'
  }
};

export const base = css`
  padding: ${extRem(52)} 0;
  text-align: left;
  position: relative;
  
  ${props => props.breakpointsStatus[MD] && `
    text-align: center;
    padding: ${extRem(72)} 0;
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
  margin: ${extRem(48)} 0 0;
  
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

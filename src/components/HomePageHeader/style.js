import { css, keyframes } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { MD } from '../../config/breakpoints';

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
  padding: ${extRem(60)} 0;
  text-align: center;
`;

export const title = css`
  ${typography.header2}
  color: ${neutral.high};
  margin: ${extRem(32)} 0 0;
  line-height: 1.1;
  font-weight: 600;
  
  strong {
    color: ${basic.primary};
  }
  
  ${props => props.breakpointsStatus[MD] && typography.header1}
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
  color: ${neutral.high};
  line-height: 1.5;
  max-width: ${extRem(650)};
  margin: ${extRem(48)} auto 0;
`;

export const pillsAnimation = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const pill = css`
  animation: ${bouncing} 0.6s infinite alternate;
  ${props => pillSettings[props.index]}
`;

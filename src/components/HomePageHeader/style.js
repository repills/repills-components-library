import { css, keyframes } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { basic, types, neutral } = theme.palettes;

/*
TBD
const spinner = keyframes`
  0% {
  }
  50% {
  }
  100% {
  }
`;
*/

const pillSettings = {
  1: {
    color: types.article,
    animationDelay: '3s'
  },
  2: {
    color: basic.primary,
    animationDelay: '0',
    margin: extRem(0, 28)
  },
  3: {
    color: types.video,
    animationDelay: '6s'
  }
};

export const base = css`
  padding: ${extRem(60)} 0;
  text-align: center;
`;

export const title = css`
  ${typography.header1}
  color: ${neutral.highest};
  margin: ${extRem(50)} 0 0;
  line-height: 1.1;
`;

export const subTitle = css`
  ${typography.header4}
  color: ${neutral.highest};
  font-weight: 500;
  line-height: 1.2;
  margin: ${extRem(20)} 0 0;
  
  strong {
    font-weight: bold;
  }
`;

export const description = css`
  ${typography.body}
  color: ${neutral.highest};
  line-height: 1.5;
  max-width: ${extRem(650)};
  margin: ${extRem(60)} auto 0;
`;

export const pillsAnimation = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* TBD: animation: ${spinner} 3s infinite; */
export const pill = css`
  display: inline-block;
  animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
  animation-fill-mode: both;
  
  ${props => pillSettings[props.index]}
`;

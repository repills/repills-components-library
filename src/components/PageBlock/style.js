import { css } from 'styled-components';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { MD } from '../../config/breakpoints';

const align = {
  LEFT: {
    justifyContent: 'flex-start',
    textAlign: 'left'
  },
  CENTER: {
    justifyContent: 'center',
    textAlign: 'center'
  }
};

const { neutral } = theme.palettes;
const sideCount = '1.75rem';
export const base = css`
  text-align: left;
`;

export const content = css`
  
  ${props => props.breakpointsStatus[MD] && `
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;
    margin-right: -1rem;
  `}
`;

const commonBox = css`
  ${props => props.breakpointsStatus[MD] && `
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`;

export const info = css`
  ${commonBox}
  flex: 1 1 auto;
`;

export const action = css`
  ${commonBox}
  flex-shrink: 0;
`;

export const title = css`
  ${typography.header4}
  color: ${neutral.higher};
  line-height: 1.2;
  margin: 0;
  display: flex;
  ${props => align[props.align]};
  
  ${props => props.count && `
    span {
      margin-right: 0.75rem;
    }
  `}
`;

export const count = css`
  display: inline-block;
  align-items: center;
  justify-content: center;
  height; ${sideCount};
  line-height: ${sideCount};
  color: ${neutral.higher};
  padding-left: 0.75rem;
  border-left: 1px solid ${neutral.low};
`;

export const description = css`
  ${typography.body}
  display: flex;
  color: ${neutral.medium};
  margin: 0.5rem ${props => props.size === 'CENTER' ? 'auto' : '0' } 1rem;
  line-height: 1.4;
  ${props => align[props.align]};
  
  p {
    margin: 0;
    max-width: 44rem;
  }
`;

export const body = css`
  ${typography.body}
  color: ${neutral.high};
  margin-top: 1.5rem;
  
  ${props => !props.simple && `
    border-top: 1px solid ${neutral.low};
    padding-top: 1.5rem;
  `}
`;

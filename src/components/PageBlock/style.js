import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

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
const sideCount = extRem(30);
export const base = css`
  text-align: left;
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
      margin-right: ${extRem(12)};
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
  padding-left: ${extRem(12)};
  border-left: 1px solid ${neutral.low};
`;

export const description = css`
  ${typography.body}
  display: flex;
  color: ${neutral.medium};
  margin: ${extRem(8)} ${props => props.size === 'CENTER' ? 'auto' : '0' } 2rem;
  line-height: 1.4;
  ${props => align[props.align]};
  
  p {
    margin: 0;
    max-width: ${extRem(700)}
  }
`;

export const body = css`
  ${typography.body}
  color: ${neutral.high};
  margin-top: ${extRem(24)};
  
  ${props => !props.simple && `
    border-top: 1px solid ${neutral.low};
    padding-top: ${extRem(24)};
  `}
`;

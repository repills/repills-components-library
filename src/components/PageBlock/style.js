import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const align = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
};

const { neutral } = theme.palettes;
const sideCount = extRem(36);
export const base = css`
  text-align: left;
`;

export const title = css`
  ${typography.header3}
  color: ${neutral.high};
  line-height: 1.2;
  margin: 0;
  text-align: ${props => align[props.align]};
  
  span {
    margin-right: ${extRem(12)};
  }
`;

export const count = css`
  font-size: 80%;
  display: inline-block;
  align-items: center;
  justify-content: center;
  height; ${sideCount};
  line-height: ${sideCount};
  padding-left: ${extRem(12)};
  border-left: 1px solid ${neutral.medium};
`;

export const description = css`
  ${typography.body}
  color: ${neutral.mediumHigh};
  margin: ${extRem(8)} auto 0;
  text-align: ${props => align[props.align]};
  max-width: ${extRem(700)}
`;

export const body = css`
  ${typography.body}
  margin: ${extRem(28)} 0 0;
`;

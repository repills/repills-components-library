import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { basic, types, neutral } = theme.palettes;

export const base = css`
  padding: ${extRem(60)} 0;
  text-align: center;
`;

export const title = css`
  ${typography.header1}
  color: ${neutral.highest};
  margin: 0;
  line-height: 1.1;
`;

export const icon = css`
  color: ${props => props.color};
`;

export const description = css`
  ${typography.body}
  color: ${neutral.highest};
  line-height: 1.5;
  max-width: ${extRem(500)};
  margin: ${extRem(40)} auto 0;
`;

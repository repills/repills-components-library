import { css } from 'styled-components';
import { rgba } from 'polished';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;

export const base = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const count = css`
  ${typography.header2}
  font-weight: 600;
  line-height: 1;
  color: ${neutral.lowest};
`;

export const label = css`
  ${typography.small}
  text-transform: uppercase;
  line-height: 1;
  font-weight: 400;
  color: ${rgba(neutral.lowest, .9)};
  margin-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

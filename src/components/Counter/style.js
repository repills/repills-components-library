import { css } from 'styled-components';
import { rgba } from 'polished';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { grid } from 'styled-components-grid';

const { neutral } = theme.palettes;

export const base = css``;

export const content = css`
  ${grid()}
  align-items: center;
  justify-content: center;
`;

export const box = css`
  ${grid.unit({ size: 1/2 })}
  border-right: 1px solid ${rgba(neutral.highest, .3)};

  &:first-child {
    padding-right: 1.25rem;
  }
  
  &:last-child {
    padding-left: 1.25rem;
    border-right-width: 0;
  }
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

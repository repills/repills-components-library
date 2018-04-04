import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
import { grid } from 'styled-components-grid';

const { basic, neutral } = theme.palettes;

export const base = css``;

export const content = css`
  ${grid()}
  align-items: center;
  justify-content: center;
`;

export const box = css`
  ${grid.unit({ size: 1/2 })}
  border-right: 1px solid ${neutral.low};

  &:first-child {
    padding-right: ${extRem(12)};
  }
  
  &:last-child {
    padding-left: ${extRem(12)};
    border-right-width: 0;
  }
`;

export const count = css`
  ${typography.header2}
  line-height: 1;
  color: ${neutral.high};
`;

export const label = css`
  ${typography.header4}
  line-height: 1;
  font-weight: 400;
  color: ${neutral.medium};
  margin-top: ${extRem(4)};
  padding-bottom: ${extRem(4)};
`;

import { css } from 'styled-components';
import { ellipsis } from 'polished';
import theme from '../../config/theme';
import typography from '../../shared/styles/typography';
const { neutral } = theme.palettes;

export const base = css`
  color: ${props => props.active ? props.color : neutral.higher};
  text-decoration: none;
  padding: 1rem;
  cursor: ${props => props.active ? 'default' : 'pointer'};
  position: relative;
  user-select: none;
  text-align: center;
  border-radius: 5px;
  background-color: ${neutral.lowest};

  &:hover {
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  }

  &::after {
    background-color: ${props => props.color};
    content: '';
    position: absolute;
    right: -1px;
    left: -1px;
    bottom: -1px;
    height: 0.25rem;
    border-radius: 0 0 5px 5px;
  }
`;

export const icon = css`
  line-height: 0;
  opacity: ${props => props.active ? 1 : 0.4};
`;

export const text = css`
  ${ellipsis()}
  ${typography.small}
  color: ${neutral.medium};
  margin-top: 0.75rem;
  line-height: 1;
  text-transform: uppercase;
`;

import { css } from 'styled-components';
import { rem } from 'polished';
import typography from '../../config/typography';

function getTypographyCss(config) {
  return css`
    font-size: ${rem(config.size)};
    font-weight: ${config.weight || 400};
    font-family: ${config.family};
  `;
}

export default typography.reduce((styles, config) => {
  styles[config.id] = getTypographyCss(config);
  return styles;
}, {});

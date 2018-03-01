import { extRem } from '../../utils';
import typography from '../../config/typography';

function getTypographyCss(config) {
  return {
    fontSize: extRem(config.size),
    fontWeight: config.weight || 400,
    fontFamily: config.family
  };
}

export default typography.reduce((styles, config) => {
  styles[config.id] = getTypographyCss(config);
  return styles;
}, {});

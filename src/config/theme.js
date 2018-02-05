import palettes from './palettes';

const _palettes = Object.keys(palettes).reduce((acc, key) =>{
  acc[key] = palettes[key].colors.reduce((colors, color) => {
    colors[color.id] = color.value;
    return colors;
  }, {});
  return acc;
}, {});

import { query } from './breakpoints';

export default {
  palettes: _palettes,
  breakpoints: query,
  remBase: 16
};

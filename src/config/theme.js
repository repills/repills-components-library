import palettes from './palettes';
import zIndex from './zIndex';
import { query } from './breakpoints';

const _palettes = Object.keys(palettes).reduce((acc, key) =>{
  acc[key] = palettes[key].colors.reduce((colors, color) => {
    colors[color.id] = color.value;
    return colors;
  }, {});
  return acc;
}, {});

const _breakpoints = Object.keys(query).reduce((acc, key) =>{
  acc[key] = query[key].minWidth;
  return acc;
}, {});

export default {
  palettes: _palettes,
  breakpoints: _breakpoints,
  remBase: 16,
  zIndex
};

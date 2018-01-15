import { darken } from 'polished';
import { query } from './breakpoints';
const primary = '#7a08fa';

export default {
  palettes: {
    basic: {
      primary,
      primaryHighest: darken(0.4, primary),
      secondary: '#ffdc2e'
    },
    neutral: {
      lowest: '#fff',
      highest: '#000'
    },
    mood: {}
  },
  breakpoints: query
};

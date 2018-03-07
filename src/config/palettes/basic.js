import { lighten, darken } from 'polished';
const primary = '#7a08fa';

export default {
  name: 'Basic',
  colors: [
    {
      id: 'primaryLowest',
      name: 'Primary Lowest',
      value: lighten(0.4, primary)
    },
    {
      id: 'primary',
      name: 'Primary',
      value: primary
    },
    {
      id: 'primaryHighest',
      name: 'Primary Highest',
      value: darken(0.4, primary)
    },
    {
      id: 'secondary',
      name: 'Secondary',
      value: '#ffdc2e'
    }
  ]
};

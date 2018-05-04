import { lighten, darken } from 'polished';
const primary = '#ffda00'; // '#7540EE';

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
      value: darken(0.05, primary)
    },
    {
      id: 'secondary',
      name: 'Secondary',
      value: '#7a08fa' // '#00d664'
    }
  ]
};

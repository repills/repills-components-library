import { lighten } from 'polished';
const highest = '#1c2020';
const lowest = '#fff';

export default {
  name: 'Neutral',
  colors: [
    {
      id: 'lowest',
      name: 'Lowest',
      value: lowest
    },
    {
      id: 'lower',
      name: 'Lower',
      value: lighten(.85, highest)
    },
    {
      id: 'low',
      name: 'Low',
      value: lighten(.75, highest)
    },
    {
      id: 'medium',
      name: 'Medium',
      value: lighten(.5, highest)
    },
    /*
    {
      id: 'mediumHigh',
      name: 'Medium High',
      value: '#a0a0a0'
    },
    */
    {
      id: 'high',
      name: 'High',
      value: lighten(.2, highest)
    },
    {
      id: 'higher',
      name: 'Higher',
      value: lighten(.1, highest)
    },
    {
      id: 'highest',
      name: 'Highest',
      value: highest
    }
  ]
};

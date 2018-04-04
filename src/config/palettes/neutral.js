// import { lighten, darken } from 'polished';
const highest = '#2a2a2a';
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
      value: '#f9f8f6'
    },
    {
      id: 'low',
      name: 'Low',
      value: '#e5ded7' // lighten(.5, highest)
    },
    {
      id: 'medium',
      name: 'Medium',
      value: '#b2b2b2' // lighten(.5, highest)
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
      value: '#8e8a87' // lighten(.2, highest)
    },
    {
      id: 'higher',
      name: 'Higher',
      value: '#666'
    },
    {
      id: 'highest',
      name: 'Highest',
      value: highest
    }
  ]
};

import { darken } from 'polished';
import config from 'repills-config';
const primary = '#7a08fa';

const colorTypes = Object.keys(config.types).reduce((acc, key) => {
  const item = config.types[key];
  acc.push({
    id: key,
    name: item.label.singular,
    value: item.color
  });
  return acc;
}, []);

export default {
  basic: {
    name: 'Basic',
    colors: [
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
  },
  neutral: {
    name: 'Neutral',
    colors: [
      {
        id: 'lowest',
        name: 'Lowest',
        value: '#fff'
      },
      {
        id: 'medium',
        name: 'Medium',
        value: '#e0e0e0'
      },
      {
        id: 'high',
        name: 'High',
        value: '#333'
      },
      {
        id: 'highest',
        name: 'Highest',
        value: '#000'
      }
    ]
  },
  types: {
    name: 'Types',
    colors: colorTypes
  }
};

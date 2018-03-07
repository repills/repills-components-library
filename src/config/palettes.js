import { lighten, darken } from 'polished';
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
        id: 'lower',
        name: 'Lower',
        value: '#fafafa'
      },
      {
        id: 'low',
        name: 'Low',
        value: '#f0f0f0'
      },
      {
        id: 'medium',
        name: 'Medium',
        value: '#e0e0e0'
      },
      {
        id: 'mediumHigh',
        name: 'Medium High',
        value: '#bbb'
      },
      {
        id: 'high',
        name: 'High',
        value: '#444'
      },
      {
        id: 'highest',
        name: 'Highest',
        value: '#1c2020'
      }
    ]
  },
  types: {
    name: 'Types',
    colors: colorTypes
  },
  status: {
    name: 'Status',
    colors: [
      {
        id: 'ok',
        name: 'Ok',
        value: '#64a338'
      },
      {
        id: 'warning',
        name: 'warning',
        value: '#ffcc00'
      },
      {
        id: 'danger',
        name: 'Danger',
        value: '#e03b24'
      }
    ]
  }
};

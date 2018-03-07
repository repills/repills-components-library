import config from 'repills-config';

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
  name: 'Types',
  colors: colorTypes
};

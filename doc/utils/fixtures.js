import faker from 'faker';
import { types } from 'repills-config';

// Exclude extended types
const typeKeys = Object.keys(types).filter(key => !key.includes('_'));

//--------
// COMMONS
//--------

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//------
// TYPES
//------

export function getRandomType() {
  const randomKey = typeKeys[getRandomNumber(0, typeKeys.length - 1)];
  return { key: randomKey, config: types[randomKey] };
}

//----------
// RESOURCES
//----------

export function getRandomResource({ title, date, author, link, color, typeLabel, type }) {
  const randomType = getRandomType();
  return {
    frontmatter: {
      title: title || faker.lorem.sentence(),
      date: date || faker.date.past().toJSON(),
      sections: ['reactjs'], // @TODO: add fixture
      author: author || faker.name.findName(),
      link: link || faker.internet.url(),
      topics: ['why_react', 'react_components'],   // @TODO: add fixture
      color: color || randomType.config.color,
      typeLabel: typeLabel || randomType.config.label.singular,
      type: type || [randomType.key]
    }
  };
}

export function getResourceList(length) {
  return [...new Array(length)].map(_ => getRandomResource({}) );
}

export function getRandomResourceList(min = 0, max = 20) {
  return getResourceList(getRandomNumber(min, max)) ;
}

//-------
// TOPICS
//-------

export function getRandomTopic({ title, resourcesLength }) {
  return {
    title: title || faker.lorem.sentence(),
    resources: resourcesLength ? getResourceList(resourcesLength) : getRandomResourceList(),
    path: `/${faker.lorem.word()}`
  };
}

export function getRandomTopicList(length) {
  return [...new Array(length)].map(_ => getRandomTopic({}) );
}

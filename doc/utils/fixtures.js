import faker from 'faker';
import { types, sections } from 'repills-config';

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

export function getRandomResource({ title, date, author, link, color, typeLabel, type, suggestedBy }) {
  const randomType = getRandomType();
  return {
    frontmatter: {
      title: title || faker.lorem.sentence(),
      publishedAt: date || faker.date.past().toJSON(),
      createdAt: date || faker.date.past().toJSON(),
      sections: ['reactjs'], // @TODO: add fixture
      author: author || faker.name.findName(),
      link: link || faker.internet.url(),
      topics: ['why_react', 'react_components'],   // @TODO: add fixture
      color: color || randomType.config.color,
      typeLabel: typeLabel || randomType.config.label.singular,
      type: type || [randomType.key],
      suggestedBy: suggestedBy || faker.name.findName(),
      reference: faker.random.uuid(),
      slug: faker.lorem.word().replace(' ', '-')
    }
  };
}

export function getResourceList(length) {
  return Array.from({ length }, () => getRandomResource({}) );
}

export function getRandomResourceList(min = 0, max = 20) {
  return getResourceList(getRandomNumber(min, max)) ;
}

//-------------
// CONTRIBUTORS
//-------------

export function getRandomContributor({ nickname, count }) {
  return {
    nickname: nickname || faker.internet.userName(),
    publishedCount: count || getRandomNumber(1,30)
  };
}

export function getContributorsList(length) {
  return Array.from({ length }, () => getRandomContributor({}) );
}

export function getRandomContributorsList(min = 0, max = 20) {
  return getContributorsList(getRandomNumber(min, max)) ;
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
  return Array.from({ length }, () => getRandomTopic({}) );
}

//---------
// SECTIONS
//---------

export function getRandomSection() {
  const baseSection = sections[getRandomNumber(0, sections.length - 1)];
  return Object.assign(
    {},
    baseSection,
    {
      id: `${faker.lorem.word()}-${getRandomNumber(0, 100)}`,
      resourcesCount: getRandomNumber(0, 50),
      topicsCount: getRandomNumber(0, 20),
      // topicsCount: baseSection.topics.length,
      path: `/${faker.lorem.word()}`,
      disabled: Boolean(getRandomNumber(0, 1))
    }
  );
}

export function getRandomSectionList(length) {
  return Array.from({ length }, () => getRandomSection() );
}

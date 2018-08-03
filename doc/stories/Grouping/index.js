import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  ProvideContainerQuery,
  ResourcesListWithDetail,
  SectionsList,
  TopicsList,
  TypesList,
  KeywordsCloud,
  ContributorsList,
  FeatureList
} from '../../../src/components';
import {
  select,
  number
} from '@storybook/addon-knobs/react';
import {
  getResourceList,
  getRandomResourceList,
  getRandomSectionList,
  getRandomTopicList,
  getContributorsList
} from '../../utils/fixtures';
import { types } from 'repills-config';
import theme from '../../../src/config/theme';
const { neutral } = theme.palettes;

const title = 'Components > Grouping ';

const navigateTo = path => alert(`Navigate to ${path}`);

const addons = {
  info: true,
  backgrounds: [
    {
      name: 'Light low',
      value: neutral.lower,
      default: true
    },
    {
      name: 'Dark',
      value: neutral.highest
    }
  ],
};

//---------------
// RESOURCES LIST
//---------------

const navigateToDetail = ({ slug, publishedAt }) => alert(`Detail view for resource with slug: ${slug}`);

const generateDetailUrl = ({ slug, publishedAt }) => slug;

const handleDetailView = ({ resource }) => console.log('resource detail: ', resource);

const resourcesList = getResourceList(12).map(e => e.frontmatter);

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Resources',
    () => {

      const ExampleWithContainerQuery = ProvideContainerQuery(ResourcesListWithDetail);

      return (
        <ExampleWithContainerQuery
          breaks={{ XS: 4, SM: 6 }}
          dateType={select('Date type', { 'Share date': 'createdAt', 'Publish date': 'publishedAt' }, 'createdAt')}
          generateDetailUrl={generateDetailUrl}
          handleDetailView={handleDetailView}
          navigateToDetail={navigateToDetail}
          navigateToSection={sectionId => alert('Navigate to section: ' + sectionId)}
          navigateToTopic={topicId => alert('Navigate to topic: ' + topicId)}
          resources={resourcesList}
          showAllAction={{
            onClick: () => alert('Clicked on Show all button'),
            href: '/show/all/path'
          }}
        />
      );
    }
  );

//--------------
// SECTIONS LIST
//--------------

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Sections',
    () => {
      const ExampleWithContainerQuery = ProvideContainerQuery(SectionsList);

      return (
        <ExampleWithContainerQuery
          navigateTo={navigateTo}
          sections={getRandomSectionList(number('Sezioni', 6, {
            min: 1,
            max: 12,
            step: 1,
          }))}
        />
      );
    }
  );

//------------
// TOPICS LIST
//------------

const showAllAction = () => ({
  onClick: () => alert('Clicked on Show all button')
});

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Topics',
    () => {
      const others = {};
      const type = select('Type', { Simple: 'default', Extended: 'extended' }, 'default');

      if (type !== 'default') {
        others['type'] = type;
      }

      const ExampleWithContainerQuery = ProvideContainerQuery(TopicsList);

      return (
        <ExampleWithContainerQuery
          breaks={{ XS: 4, SM: 6 }}
          navigateTo={navigateTo}
          showAllAction={showAllAction}
          topics={getRandomTopicList(number('Resources', 6, {
            min: 1,
            max: 12,
            step: 1,
          }))}
          {...others}
        />
      );
    }
  );

//-----------
// TYPES LIST
//-----------

const filteredTypes = Object.keys(types).filter(key => !key.includes('_'));

const data = filteredTypes.reduce((acc, key) => {
  acc[key] = types[key];
  acc[key].resources = getRandomResourceList(0,12);
  return acc;
}, {});

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Types',
    () => {
      const others = {};
      const type = select('Type', { 'default': 'Simple', 'extended': 'Extended' }, 'default');

      if (type !== 'default') {
        others['type'] = type;
      }

      const ExampleWithContainerQuery = ProvideContainerQuery(TypesList);

      return (
        <ExampleWithContainerQuery
          activeKey={'video'}
          navigateTo={navigateTo}
          types={data}
        />
      );
    }
  );

//---------------
// KEYWORDS CLOUD
//---------------

// @TODO: create dedicated fixtures
const keywords = [
  'Reasons to use React',
  'Why I should use React',
  'Benefits of React',
  'React js props & cons',
  'What is React good for',
  'React advantages and disadvantages',
  'Advantages of React js over Angular js',
  'React vs Angular',
  'React vs Vue'
];

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Keywords cloud',
    () => {
      return (
        <KeywordsCloud
          keywords={keywords}
        />
      );
    }
  );

//------------------
// CONTRIBUTORS LIST
//------------------

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Contributors',
    () => {
      const contributors = getContributorsList(5);
      return (
        <ContributorsList
          contributors={contributors}
        />
      );
    }
  );

//--------------
// FEATURES LIST
//--------------

// @TODO: make dedicated fixtures
const features = [
  {
    icon: 'GitHub',
    title: 'Title feature 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: 'PullRequest',
    title: 'Title feature 2',
    description: 'Cras nec iaculis eros. Morbi tortor ipsum, luctus quis iaculis in, pharetra ut velit.'
  },
  {
    icon: 'Star',
    title: 'Title feature 3',
    description: 'Phasellus id fringilla nibh, at <strong>lacinia risus</strong>. Nam tincidunt eros sit amet sagittis consequat.'
  },
  {
    icon: 'User',
    title: 'Title feature 4',
    description: 'Nulla at facilisis justo. Integer convallis risus sed lacinia elementum.'
  },
  {
    icon: 'GitHub',
    title: 'Title feature 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: 'PullRequest',
    title: 'Title feature 2',
    description: 'Cras nec iaculis eros. Morbi tortor ipsum, luctus quis iaculis in, pharetra ut velit.'
  },
  {
    icon: 'Star',
    title: 'Title feature 3',
    description: 'Phasellus id fringilla nibh, at <strong>lacinia risus</strong>. Nam tincidunt eros sit amet sagittis consequat.'
  },
  {
    icon: 'User',
    title: 'Title feature 4',
    description: 'Nulla at facilisis justo. Integer convallis risus sed lacinia elementum.'
  }
];

// Dark
createNewSection({
  title: `${title}/Features`,
  description: 'Description will be here',
  addons: {
    info: true,
    backgrounds: [
      {
        name: 'Dark',
        value: neutral.highest,
        default: true
      }
    ]
  }
})
  .add(
    'Dark',
    () => {

      const ExampleWithContainerQuery = ProvideContainerQuery(FeatureList);

      return (
        <ExampleWithContainerQuery
          features={features}
        />
      );
    }
  );

createNewSection({
  title: `${title}/Features`,
  description: 'Description will be here',
  addons: {
    info: true,
    backgrounds: [
      {
        name: 'Light',
        value: neutral.lowest,
        default: true
      }
    ]
  }
})
  .add(
    'Light',
    () => {
      const ExampleWithContainerQuery = ProvideContainerQuery(FeatureList);

      return (
        <ExampleWithContainerQuery
          features={features}
        />
      );
    }
  );

import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  ResourcePreview,
  SectionPreview,
  TopicPreview,
  TopicExtendedPreview,
  TypePreview,
  ResourceDetail
} from '../../../src/components';
import { select, number, text } from '@storybook/addon-knobs/react';
import {
  getRandomResource,
  getRandomSection,
  getRandomTopic
} from '../../utils/fixtures';
import { types } from 'repills-config';

const title = 'Components > Previewing';

const addons = {
  info: true,
};

//-----------------
// RESOURCE PREVIEW
//-----------------

const randomResource = getRandomResource({}).frontmatter;

const onHandleDetailView = ({ reference }) => {
  alert(`Detail view for resource with reference: ${reference}`);
};

const navigateToDetail = ({ slug, publishedAt }) => {
  alert(`Detail view for resource with slug: ${slug}`);
};

const generateDetailUrl = ({ slug, publishedAt }) => {
  return slug;
};

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Resource',
    () => {
      return (
        <ResourcePreview
          dateType={select('Date type', { createdAt: 'Share date', publishedAt: 'Publish date' }, 'createdAt')}
          generateDetailUrl={generateDetailUrl}
          handleDetailView={onHandleDetailView}
          navigateToDetail={navigateToDetail}
          {...randomResource}
        />
      );
    }
  );

//----------------
// RESOURCE DETAIL
//----------------

const randomVideoResource = getRandomResource({
  link: 'https://www.youtube.com/watch?v=wZN_FtZRYC8'
}).frontmatter;

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Resource Detail',
    () => {
      return (
        <ResourceDetail
          generateSectionUrl={sectionSlug => sectionSlug}
          generateTopicUrl={topicSlug => topicSlug}
          navigateTo={() => alert('Navigate to: ' + randomResource.link)}
          navigateToSection={sectionSlug => alert('Navigate to section: ' + sectionSlug)}
          navigateToTopic={topicSlug => alert('Navigate to topic: ' + topicSlug)}
          {...randomResource}
        />
      );
    }
  )
  .add(
    'Resource Detail (Video)',
    () => {
      return (
        <ResourceDetail
          generateSectionUrl={sectionSlug => sectionSlug}
          generateTopicUrl={topicSlug => topicSlug}
          navigateTo={() => alert('Navigate to: ' + randomResource.link)}
          navigateToSection={sectionSlug => alert('Navigate to section: ' + sectionSlug)}
          navigateToTopic={topicSlug => alert('Navigate to topic: ' + topicSlug)}
          {...randomVideoResource}
        />
      );
    }
  );

//----------------
// SECTION PREVIEW
//----------------

const randomSection = getRandomSection({
  name: text('Name', 'Section Name'),
  resourcesLength: number('Resources', 2, {
    range: true,
    min: 0,
    max: 10,
    step: 1,
  })
});

const navigateTo = path => alert(`Navigate to ${path}`);

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Section',
    () => {
      return (
        <SectionPreview
          navigateTo={navigateTo}
          {...randomSection}
        />
      );
    }
  );

//--------------
// TOPIC PREVIEW
//--------------

const randomTopic = getRandomTopic({
  title: text('Title', 'Topic title'),
  resourcesLength: number('Resources', 2, {
    range: true,
    min: 0,
    max: 10,
    step: 1,
  })
});

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Topic',
    () => {
      return (
        <TopicPreview
          navigateTo={() => alert('Navigate to: ' + randomTopic.path)}
          {...randomTopic}
        />
      );
    }
  );

//-----------------------
// TOPIC PREVIEW EXTENDED
//-----------------------

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Topic (extended)',
    () => {
      return (
        <TopicExtendedPreview
          navigateTo={() => alert('Navigate to: ' + randomTopic.path)}
          {...randomTopic}
        />
      );
    }
  );

//-------------
// TYPE PREVIEW
//-------------

// Exclude extended types
const filteredTypes = Object.keys(types).filter(key => !key.includes('_'));
const typeOptions = filteredTypes.reduce((options, key) => {
  options[key] = types[key].label.singular;
  return options;
}, {});

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Type',
    () => {
      const type = select('Type', typeOptions, filteredTypes[0]);
      const selectedType = types[type];
      const navigateTo = path => alert(`Navigate to ${path}`);
      return (
        <TypePreview
          color={selectedType.color}
          count={number('Count', 10)}
          icon={type.charAt(0).toUpperCase() + type.slice(1)}
          id={selectedType.id}
          label={selectedType.label}
          navigateTo={navigateTo}
        />
      );
    }
  );

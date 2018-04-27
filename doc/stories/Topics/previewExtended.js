import React from 'react';
import { text, number } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { TopicExtendedPreview } from '../../../src/components';
import { getRandomTopic } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomTopic = getRandomTopic({
    title: text('Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    description: text('Description', 'Nulla suscipit mi et volutpat cursus. Curabitur mattis augue at cursus ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    resourcesLength: number('Resources', 2, {
      range: true,
      min: 0,
      max: 10,
      step: 1,
    })
  });

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={TopicExtendedPreview}
        navigateTo={() => alert('Navigate to: ' + randomTopic.path)}
        {...randomTopic}
      />
    </SectionPage>
  );
};

import React from 'react';
import { text, number } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { TopicPreview } from '../../../src/components';
import { getRandomTopic } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomTopic = getRandomTopic({
    title: text('Title', 'Topic title'),
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
        component={TopicPreview}
        {...randomTopic}
      />
    </SectionPage>
  );
};

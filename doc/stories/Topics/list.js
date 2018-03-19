import React from 'react';
import { number } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { TopicsList } from '../../../src/components';
import { getRandomTopicList } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const navigateTo = path => alert(`Navigate to ${path}`);

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={TopicsList}
        navigateTo={navigateTo}
        topics={getRandomTopicList(number('Resources', 6, {
          min: 1,
          max: 12,
          step: 1,
        }))}
      />
    </SectionPage>
  );
};

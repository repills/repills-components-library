import React from 'react';
import { text, number } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { SectionPreview } from '../../../src/components';
import { getRandomSection } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomTopic = getRandomSection({
    name: text('Name', 'Section Name'),
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
        component={SectionPreview}
        navigateTo={() => alert('Navigate to: ' + randomTopic.path)}
        {...randomTopic}
      />
    </SectionPage>
  );
};

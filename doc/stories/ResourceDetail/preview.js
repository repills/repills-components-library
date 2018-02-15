import React from 'react';
import { number } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { ResourceDetail } from '../../../src/components';
import { getRandomResource } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomResource = getRandomResource({
    resourcesLength: number('Resources', 2, {
      range: true,
      min: 0,
      max: 10,
      step: 1,
    })
  }).frontmatter;

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={ResourceDetail}
        navigateTo={() => alert('Navigate to: ' + randomResource.link)}
        navigateToSection={sectionId => alert('Navigate to section: ' + sectionId)}
        navigateToTopic={topicId => alert('Navigate to topic: ' + topicId)}
        {...randomResource}
      />
    </SectionPage>
  );
};

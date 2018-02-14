import React from 'react';
import { number } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { ResourcePreview } from '../../../src/components';
import { getRandomResource } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomResource = getRandomResource({
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
        component={ResourcePreview}
        navigateTo={() => alert('Navigate to: ' + randomResource.path)}
        {...randomResource}
      />
    </SectionPage>
  );
};

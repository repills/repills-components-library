import React from 'react';
import { number } from '@storybook/addon-knobs/react';
import { CompositionChart } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';
import { getResourcesStats } from '../../../src/utils';
import { getRandomTopic } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomTopic = getRandomTopic({
    resourcesLength: number('Resources', 2, {
      range: true,
      min: 0,
      max: 10,
      step: 1,
    })
  });

  const stats = getResourcesStats(randomTopic.resources, true);
  const maxHeight = number('Max height', 24);
  const barWidth = number('Width', 6);

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        barWidth={barWidth}
        component={CompositionChart}
        maxHeight={maxHeight}
        stats={stats}
      />
    </SectionPage>
  );
};

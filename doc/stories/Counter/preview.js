import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { Counter } from '../../../src/components';
import { text, number, boolean } from '@storybook/addon-knobs/react';
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

  const options = {};
  const showStats = boolean('Show Stats', true);

  if (showStats) {
    options['stats'] = getResourcesStats(randomTopic.resources, true);
  }

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={Counter}
        count={number('Count', 12)}
        label={text('Label', 'total pills')}
        {...options}
      />
    </SectionPage>
  );
};

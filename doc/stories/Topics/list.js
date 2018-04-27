import React from 'react';
import { number, select } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { TopicsList } from '../../../src/components';
import { getRandomTopicList } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const others = {};
  const navigateTo = path => alert(`Navigate to ${path}`);
  const type = select('Type', { 'default': 'Simple', 'extended': 'Extended' }, 'default');

  if (type !== 'default') {
    others['type'] = type;
  }

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        breaks={{ XS: 4, SM: 6 }}
        component={TopicsList}
        navigateTo={navigateTo}
        showAllAction={{
          onClick: () => alert('Clicked on Show all button')
        }}
        topics={getRandomTopicList(number('Resources', 6, {
          min: 1,
          max: 12,
          step: 1,
        }))}
        {...others}
      />
    </SectionPage>
  );
};

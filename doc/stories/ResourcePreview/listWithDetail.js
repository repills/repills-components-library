import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { ResourcesListWithDetail } from '../../../src/components';
import { getRandomResourceList } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={ResourcesListWithDetail}
        dateType={select('Date type', { createdAt: 'Share date', publishedAt: 'Publish date' }, 'createdAt')}
        navigateToSection={sectionId => alert('Navigate to section: ' + sectionId)}
        navigateToTopic={topicId => alert('Navigate to topic: ' + topicId)}
        resources={getRandomResourceList(3,10).map(e => e.frontmatter)}
      />
    </SectionPage>
  );
};

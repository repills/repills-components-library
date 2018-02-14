import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { ResourcesList } from '../../../src/components';
import { getRandomResourceList } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const navigateTo = path => alert(`Navigate to ${path}`);

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={ResourcesList}
        navigateTo={navigateTo}
        resources={getRandomResourceList(3,10).map(e => e.frontmatter)}
      />
    </SectionPage>
  );
};

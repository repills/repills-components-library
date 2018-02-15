import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { ResourcesList } from '../../../src/components';
import { getRandomResourceList } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={ResourcesList}
        resources={getRandomResourceList(3,10).map(e => e.frontmatter)}
      />
    </SectionPage>
  );
};

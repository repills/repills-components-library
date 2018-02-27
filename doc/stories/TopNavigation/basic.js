import React from 'react';
import { TopNavigation } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components/index';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={TopNavigation}
      />
    </SectionPage>
  );
};

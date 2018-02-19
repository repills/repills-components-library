import React from 'react';
import { SectionSelector } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';
import { sections } from 'repills-config';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Section"
      title={sectionTitle}
    >
      <InteractiveExample
        component={SectionSelector}
        handleOnChange={({ selected }) => alert(`Selected index: ${selected}`)}
        sections={sections}
      />
    </SectionPage>
  );
};

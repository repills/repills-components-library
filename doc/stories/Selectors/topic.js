import React from 'react';
import { TopicSelector } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';
import { sections } from 'repills-config';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Topic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={TopicSelector}
        handleOnChange={({ selected }) => alert(`Selected topics: ${selected}`)}
        topics={sections[0].topics}
      />
    </SectionPage>
  );
};

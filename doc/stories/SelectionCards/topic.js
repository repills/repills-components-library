import React from 'react';
import { TopicPreviewSelection } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';
import { getRandomTopic } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomTopic = getRandomTopic({ resourcesLength: 6 });

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Topic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={TopicPreviewSelection}
        handleOnChange={({ checked }) => alert(`Selected: ${checked}`)}
        title={randomTopic.title}
      />
    </SectionPage>
  );
};

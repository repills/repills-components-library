import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import { TypePageHeader } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';
import { getRandomType } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomType = getRandomType().config;

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        color={randomType.color}
        component={TypePageHeader}
        icon={randomType.label.singular}
        topicAction={() => alert('Click on section')}
        topicName="React"
        typeName={randomType.label.plural}
      />
    </SectionPage>
  );
};

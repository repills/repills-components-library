import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import { SimplePageHeader } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={SimplePageHeader}
        previewSkin="secondary"
        title={text('Title', "It's a sample title")}
      />
    </SectionPage>
  );
};

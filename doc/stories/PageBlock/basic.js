import React from 'react';
import { text, number } from '@storybook/addon-knobs/react';
import { PageBlock } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

export default (sectionTitle, sectionDescription) => () => {

  const childrenX = <div>Chil text</div>;

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        children={childrenX}
        component={PageBlock}
        contentsCount={number('Number of contents', 5)}
        title={text('Title', 'Your page block title will be here')}
      />
    </SectionPage>
  );
};

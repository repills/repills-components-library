import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import { HomePageHeader } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

export default (sectionTitle, sectionDescription) => () => {

  const title = text('Title', `Daily <strong>PILLS</strong> to get new <strong>SKILLS</strong>`);
  const subTitle = text('SubTitle', 'for web developers and UI designers');
  const description = text('Description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, massa a varius efficitur, orci dui semper ex, sit amet porta sem dui ac odio.');

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={HomePageHeader}
        description={description}
        subTitle={subTitle}
        title={title}
      />
    </SectionPage>
  );
};

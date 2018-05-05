import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import { SectionPageHeader } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';
import { getRandomSection } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomSection = getRandomSection();

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        color={randomSection.color}
        component={SectionPageHeader}
        description={randomSection.description}
        icon={randomSection.icon}
        label={text('Label', 'Section')}
        previewSkin="secondary"
        title={randomSection.name}
      />
    </SectionPage>
  );
};

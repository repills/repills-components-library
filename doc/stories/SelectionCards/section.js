import React from 'react';
import { SectionPreviewSelection } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';
import { getRandomSection } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const randomSection = getRandomSection();

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Section"
      title={sectionTitle}
    >
      <InteractiveExample
        color={randomSection.color}
        component={SectionPreviewSelection}
        handleOnChange={({ checked }) => alert(`Selected: ${checked}`)}
        icon={randomSection.icon}
        name={randomSection.name}
      />
    </SectionPage>
  );
};

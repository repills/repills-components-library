import React from 'react';
import { text, number } from '@storybook/addon-knobs/react';
import { ContributorsList } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';
import { getContributorsList } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const contributors = getContributorsList(5);

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={ContributorsList}
        contributors={contributors}
      />
    </SectionPage>
  );
};

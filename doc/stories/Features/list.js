import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { FeatureList } from '../../../src/components';

const features = [
  {
    icon: 'GitHub',
    title: 'Title feature 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: 'PullRequest',
    title: 'Title feature 2',
    description: 'Cras nec iaculis eros. Morbi tortor ipsum, luctus quis iaculis in, pharetra ut velit.'
  },
  {
    icon: 'Star',
    title: 'Title feature 3',
    description: 'Phasellus id fringilla nibh, at <strong>lacinia risus</strong>. Nam tincidunt eros sit amet sagittis consequat.'
  },
  {
    icon: 'User',
    title: 'Title feature 4',
    description: 'Nulla at facilisis justo. Integer convallis risus sed lacinia elementum.'
  }
];

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={FeatureList}
        features={features}
      />
    </SectionPage>
  );
};

import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { TileCta } from '../../../src/components';

const tile = {
  icon: 'GitHub',
  title: 'Title tile',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  cta: {
    onClick: () => alert('Clicked!'),
    label: 'Label button'
  }
};

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={TileCta}
        {...tile}
      />
    </SectionPage>
  );
};

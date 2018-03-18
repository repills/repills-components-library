import React from 'react';
import { select, boolean } from '@storybook/addon-knobs/react';
import { Modal } from '../../../../src/components';
import { SectionPage, InteractiveExample } from '../../../components';
import { ChildDetail } from './childrenExample';

export default (sectionTitle, sectionDescription) => () => {

  const children = {
    detail: <ChildDetail />
  };

  const selectedChild = select(
    'Example content',
    {
      'detail': 'Modal with resource detail'
    },
    'detail'
  );

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        children={children[selectedChild]}
        component={Modal}
        handleClose={() => alert('Close modal!')}
        open={boolean('Open', false)}
        size={select('Size', { S: 'Small', M: 'Medium', L: 'Large' }, 'M')}
      />
    </SectionPage>
  );
};

import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { ShareBar } from '../../../src/components';
import { text } from '@storybook/addon-knobs/react';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={ShareBar}
        link={text('Link', 'http://repills.com')}
        text={text('text', 'Learn pill by pill on repills.com')}
        title={text('title', 'Pills around the web for web developers and UI designers')}
        types={['facebook','google','linkedin','twitter','email']}
      />
    </SectionPage>
  );
};

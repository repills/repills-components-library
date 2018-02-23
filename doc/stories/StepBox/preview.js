import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { StepBox } from '../../../src/components';
import { text, number } from '@storybook/addon-knobs/react';

export default (sectionTitle, sectionDescription) => () => {

  const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus suscipit dolor. Quisque mattis eu nibh quis volutpat.';

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        children={body}
        component={StepBox}
        index={number('Index', 12)}
        title={text('Title', 'Title here')}
      />
    </SectionPage>
  );
};

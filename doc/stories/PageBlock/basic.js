import React from 'react';
import { text, number, select, boolean } from '@storybook/addon-knobs/react';
import { PageBlock } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

export default (sectionTitle, sectionDescription) => () => {

  const childrenX = <div>Chil text</div>;

  const others = {};
  const hidePrimaryAction = boolean('Hide primary action', false);

  if (!hidePrimaryAction) {
    others.primaryAction = {
      label: 'Call to action',
      onClick: () => alert('You have clicked on the primary action!')
    };
  }
  const simple = boolean('Simple', false);

  if (simple) {
    others['simple'] = true;
  }

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        align={select('Alignment', { LEFT: 'Left', CENTER: 'Center' })}
        children={childrenX}
        component={PageBlock}
        contentsCount={number('Number of contents', 5)}
        description={text('Description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur urna a libero tincidunt tristique id eu enim.')}
        title={text('Title', 'Your page block title will be here')}
        {...others}
      />
    </SectionPage>
  );
};

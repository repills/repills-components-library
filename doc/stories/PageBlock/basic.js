import React from 'react';
import { text, number, select } from '@storybook/addon-knobs/react';
import { PageBlock } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

export default (sectionTitle, sectionDescription) => () => {

  const childrenX = <div>Chil text</div>;

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        align={select('Alignment', { LEFT: 'Left', CENTER: 'Center', RIGHT: 'RIGHT' })}
        children={childrenX}
        component={PageBlock}
        contentsCount={number('Number of contents', 5)}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur urna a libero tincidunt tristique id eu enim."
        title={text('Title', 'Your page block title will be here')}
      />
    </SectionPage>
  );
};

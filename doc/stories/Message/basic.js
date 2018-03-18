import React from 'react';
import { text, select } from '@storybook/addon-knobs/react';
import icons from '../../../src/config/icons';
import * as Icons from '../../../src/components';
import { Message } from '../../../src/components/index';
import { SectionPage, InteractiveExample } from '../../components/index';

const iconsOptions = icons.basic.reduce((options, config) => {
  options[config.id] = config.name;
  return options;
}, {});

export default (sectionTitle, sectionDescription) => () => {

  const selectedIcon = select('Icona', iconsOptions, icons.basic[0].id);

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={Message}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur urna a libero tincidunt tristique id eu enim."
        icon={selectedIcon}
        title={text('Title', 'Your page block title will be here')}
      />
    </SectionPage>
  );
};

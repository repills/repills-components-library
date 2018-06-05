import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  boolean,
  text
} from '@storybook/addon-knobs/react';
import {
  SimplePageHeader,
  SectionPageHeader,
  TypePageHeader,
  HomePageHeader,
  PageBlock,
  theme
} from '../../../src/components';
import {
  getRandomSection,
  getRandomType,
  getRandomNumber
} from '../../utils/fixtures';
const { basic } = theme.palettes;

const title = 'Layout';
const headerTitle = `${title} > Page Headers`;
const pageBlockTitle = `${title} > Page Blocks`;

const addonsHeaderTitle = {
  info: true,
  backgrounds: [
    {
      name: 'Default',
      value: basic.secondary,
      default: true
    }
  ]
};

const addonsPageBlock = {
  info: true,
};

//-------------
// PAGE HEADERS
//-------------
const randomSection = getRandomSection();
const randomType = getRandomType().config;

createNewSection({
  title: headerTitle,
  description: 'Description will be here',
  addons: addonsHeaderTitle
})
  .add(
    'Simple',
    () => {
      return (
        <SimplePageHeader
          title={text('Title', "It's a sample title")}
        />
      );
    }
  )
  .add(
    'Section',
    () => {
      return (
        <SectionPageHeader
          color={randomSection.color}
          description={randomSection.description}
          icon={randomSection.icon}
          label={text('Label', 'Section')}
          previewSkin="secondary"
          title={randomSection.name}
        />
      );
    }
  )
  .add(
    'Type',
    () => {
      return (
        <TypePageHeader
          color={randomType.color}
          component={TypePageHeader}
          count={getRandomNumber(0,3)}
          icon={randomType.label.singular}
          previewSkin="secondary"
          topicAction={() => alert('Click on section')}
          topicName="React"
          typeName={randomType.label}
        />
      );
    }
  )
  .add(
    'Homepage',
    () => {

      const others = {};
      const title = text('Title', `<strong>Stay up to date</strong> with the latest cutting-edge technologies and <strong>improve your skills pill by pill</strong>, day by day.`);
      const description = text('Description', 'Repills is going to be the place to learn about web development and design through well-organized high-quality resources.');
      const hidePrimaryAction = boolean('Hide primary action', false);
      const hideSecondaryAction = boolean('Hide secondary action', false);

      if (!hidePrimaryAction) {
        others.primaryAction = {
          label: 'Take a look to our topics',
          onClick: () => alert('You have clicked on the primary action!')
        };
      }

      if (!hideSecondaryAction) {
        others.secondaryAction = {
          label: '300 resources available yet',
          onClick: () => alert('You have clicked on the secondary action!')
        };
      }

      return (
        <HomePageHeader
          description={description}
          previewSkin="secondary"
          title={title}
          {...others}
        />
      );
    }
  );

//------------
// PAGE BLOCKS
//------------
createNewSection({
  title: pageBlockTitle,
  description: 'Description will be here',
  addons: addonsPageBlock
})
  .add(
    'Basic',
    () => {
      return (
        <PageBlock
          title="Your page block title will be here"
        />
      );
    }
  )
  .add(
    'With description',
    () => {
      return (
        <PageBlock
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur urna a libero tincidunt tristique id eu enim."
          title="Your page block title will be here"
        />
      );
    }
  )
  .add(
    'With counter',
    () => {
      return (
        <PageBlock
          contentsCount={5}
          title="Your page block title will be here"
        />
      );
    }
  )
  .add(
    'With description and counter',
    () => {
      return (
        <PageBlock
          contentsCount={5}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur urna a libero tincidunt tristique id eu enim."
          title="Your page block title will be here"
        />
      );
    }
  );


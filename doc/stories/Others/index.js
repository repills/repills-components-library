import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  Counter,
  Message,
  TileCta
} from '../../../src/components';
import {
  select,
  number,
  text
} from '@storybook/addon-knobs/react';
import icons from '../../../src/config/icons';
import theme from '../../../src/config/theme';
const { basic } = theme.palettes;

const title = 'Components > Others ';

const addons = {
  info: true
};

const iconsOptions = icons.basic.reduce((options, config) => {
  options[config.name] = config.id;
  return options;
}, {});

//-----------------
// RESOURCE COUNTER
//-----------------

createNewSection({
  title,
  description: 'Description will be here',
  addons: {
    info: true,
    backgrounds: [
      {
        name: 'Secondary',
        value: basic.secondary,
        default: true
      },
    ]
  }
})
  .add(
    'Counter',
    () => {
      return (
        <Counter
          count={number('Count', 12)}
          label={text('Label', 'total pills')}
        />
      );
    }
  );

//--------
// MESSAGE
//--------

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Message',
    () => {
      const selectedIcon = select('Icona', iconsOptions, icons.basic[0].id);
      return (
        <Message
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur urna a libero tincidunt tristique id eu enim."
          icon={selectedIcon}
          title={text('Title', 'Your page block title will be here')}
        />
      );
    }
  );

//-----
// TILE
//-----

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Tile',
    () => {
      // @TODO make config by knobs
      const tile = {
        icon: 'GitHub',
        title: 'Title tile',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          onClick: () => alert('Clicked!'),
          label: 'Label button'
        }
      };
      return (
        <TileCta
          {...tile}
        />
      );
    }
  );

import React from 'react';
import { createNewSection } from '../../utils/index';
import icons from '../../../src/config/icons';
import * as Icons from '../../../src/components';
import { number, select } from '@storybook/addon-knobs/react';

const title = 'Components > Icons';

const getIconSetOptions = set => icons[set].reduce((options, config) => {
  options[config.name] = config.id;
  return options;
}, {});

const previewIconSize = 60;
const iconSizeOptions = {
  range: true,
  min: 32,
  max: 100,
  step: 1
};

const addons = {
  centered: true,
};

//---------------
// STANDARD ICONS
//---------------

createNewSection({
  title,
  description: 'Description Icon here',
  addons
})
  .add(
    'Standard Icons',
    () => {
      const selectedIcon = select('Icona', getIconSetOptions('basic'), icons.basic[0].id);
      const Icon = Icons[`${selectedIcon}Icon`];
      return (
        <Icon size={number('Size', previewIconSize, iconSizeOptions)} />
      );
    }
  );

//---------------
// SECTIONS ICONS
//---------------

createNewSection({
  title,
  description: 'Description Icon here',
  addons
})
  .add(
    'Section Icons',
    () => {
      const selectedIcon = select('Icona', getIconSetOptions('sections'), icons.sections[0].id);
      const Icon = Icons[`${selectedIcon}Icon`];
      return (
        <Icon size={number('Size', previewIconSize, iconSizeOptions)} />
      );
    }
  );

//-----------
// TYPE ICONS
//-----------

createNewSection({
  title,
  description: 'Description Icon here',
  addons
})
  .add(
    'Type Icons',
    () => {
      const selectedIcon = select('Icona', getIconSetOptions('types'), icons.basic[0].id);
      const Icon = Icons[`${selectedIcon}Icon`];
      return (
        <Icon size={number('Size', previewIconSize, iconSizeOptions)} />
      );
    }
  );

//-------------
// SOCIAL ICONS
//-------------

createNewSection({
  title,
  description: 'Description Icon here',
  addons
})
  .add(
    'Social Icons',
    () => {
      const selectedIcon = select('Icona', getIconSetOptions('social'), icons.social[0].id);
      const Icon = Icons[`${selectedIcon}Icon`];
      return (
        <Icon size={number('Size', previewIconSize, iconSizeOptions)} />
      );
    }
  );





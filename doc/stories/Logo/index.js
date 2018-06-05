import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  Logo,
  theme
} from '../../../src/components';
import {
  number,
  select
} from '@storybook/addon-knobs/react';
const { basic, neutral } = theme.palettes;

const title = 'Components > Logo';

//----------
// LOGO FULL
//----------

createNewSection({
  title,
  description: 'Description will be here',
  addons: {
    info: true,
    centered: true,
    backgrounds: [
      {
        name: 'Default',
        value: basic.secondary,
        default: true
      }
    ]
  }
})
  .add(
    'Basic',
    () => {
      const selectedVariant = select('Variant', { Full: 'full', Minimal: 'minimal' }, 'none');
      const selectedSize = number('Size', 200);

      const options = {};

      if (selectedSize !== null) {
        options['size'] = selectedSize;
      }

      if (selectedVariant !== 'none') {
        options['variant'] = selectedVariant;
      }


      if (selectedVariant === 'full' || selectedVariant === 'none') {
        options['secondaryColor'] = neutral.lowest;
      }

      return (
        <Logo
          color={basic.primary}
          {...options}
        />
      );
    }
  );

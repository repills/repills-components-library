import React from 'react';
import { select, number } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { Logo } from '../../../src/components';
import palettes from '../../../src/config/palettes';

const palettesKeys = Object.keys(palettes);
const colorsOptions = palettesKeys.reduce((options, key) => {
  const palette = palettes[key].colors.reduce((colors, color) => {
    colors[color.value] = color.name;
    return colors;
  }, {});
  return Object.assign(options, palette);
}, {});

colorsOptions['none'] = 'None';

export default (sectionTitle, sectionDescription) => () => {

  const selectedColor = select('Color', colorsOptions, 'none');
  const selectedVariant = select('Variant', { full: 'Full', minimal: 'Minimal' }, 'none');
  const selectedSize = number('Size', null);

  const options = {};

  if (selectedColor !== 'none') {
    options['color'] = selectedColor;
  }

  if (selectedSize !== null) {
    options['size'] = selectedSize;
  }

  if (selectedVariant !== 'none') {
    options['variant'] = selectedVariant;
  }

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={Logo}
        {...options}
      />
    </SectionPage>
  );
};

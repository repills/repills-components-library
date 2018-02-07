import React from 'react';
import { number, select } from '@storybook/addon-knobs/react';
import { SectionPage, IconList, InteractiveExample } from '../../components';
import icons from '../../../src/config/icons';
import * as Icons from '../../../src/components';
import palettes from '../../../src/config/palettes';
import theme from '../../../src/config/theme';

const iconsOptions = icons.basic.reduce((options, config) => {
  options[config.id] = config.name;
  return options;
}, {});

const palettesKeys = Object.keys(palettes);
const colorsOptions = palettesKeys.reduce((options, key) => {
  const palette = palettes[key].colors.reduce((colors, color) => {
    colors[color.value] = color.name;
    return colors;
  }, {});
  return Object.assign(options, palette);
}, {});

export default (sectionTitle, sectionDescription) => () => {

  const selectedIcon = select('Icona', iconsOptions, icons.basic[0].id);
  const selectedColor = select('Colore Icona', colorsOptions, theme.palettes.neutral['highest']);

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        color={selectedColor}
        component={Icons[`${selectedIcon}Icon`]}
        orientation={select('Orientamento', { 'top': 'In alto', 'right': 'A destra', 'bottom': 'In basso', 'left': 'A sinistra' }, 'top')}
        showBreakpoints={false}
        size={number('Font Size', 60, {
          range: true,
          min: 32,
          max: 70,
          step: 1
        })}
      />

      <h2>Icone</h2>
      <IconList
        icons={icons.basic}
        settings={
          {
            color: '#000',
            size: 50
          }
        }
      />
    </SectionPage>
  );
};

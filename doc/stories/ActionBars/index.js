import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  select,
  text
} from '@storybook/addon-knobs/react';
import {
  ShareBar
} from '../../../src/components';
import theme from '../../../src/config/theme';
const { neutral } = theme.palettes;

const title = 'Components > Action Bars ';

//----------
// SHARE BAR
//----------

createNewSection({
  title,
  description: 'Description will be here',
  addons: {
    info: true,
    backgrounds: [
      {
        name: 'Light',
        value: neutral.lowest,
        default: true
      },
      {
        name: 'Dark',
        value: neutral.highest
      }
    ]
  }
})
  .add(
    'Share Bar',
    () => {

      const others = {};
      const color = select('Color', { 'Default': 'none', 'Dark': 'dark', 'Light': 'light' }, 'none');

      if (color !== 'none') {
        if (color === 'light') {
          others.color = neutral.lowest;
        } else {
          others.color = neutral.highest;
        }
      }

      return (
        <ShareBar
          link={text('Link', 'http://repills.com')}
          text={text('text', 'Learn pill by pill on repills.com')}
          title={text('title', 'Pills around the web for web developers and UI designers')}
          types={['facebook','google','linkedin','twitter','email']}
          {...others}
        />
      );
    }
  );

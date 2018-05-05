import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { ShareBar } from '../../../src/components';
import { text, select } from '@storybook/addon-knobs/react';
import theme from '../../../src/config/theme';
const { neutral } = theme.palettes;

export default (sectionTitle, sectionDescription) => () => {

  const others = {};
  const color = select('Color', { 'none': 'Default', 'dark': 'Dark', 'light': 'Light' }, 'none');

  if (color !== 'none') {
    if (color === 'light') {
      others.color = neutral.lowest;
      others.previewSkin = 'dark';
    } else {
      others.color = neutral.highest;
    }
  }

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={ShareBar}
        link={text('Link', 'http://repills.com')}
        text={text('text', 'Learn pill by pill on repills.com')}
        title={text('title', 'Pills around the web for web developers and UI designers')}
        types={['facebook','google','linkedin','twitter','email']}
        {...others}
      />
    </SectionPage>
  );
};

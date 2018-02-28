import React from 'react';
import { createSection } from '../../utils/index';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { Button } from '../../../src/components';

const sectionTitle = 'Buttons';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', () => {

    const options = {};
    const selectedSkin = select('Skin', { 'none': 'Default', 'ghost': 'Ghost', 'outline': 'Outline' }, 'none');

    const autoWidth = boolean('autoWidth', false);

    if (selectedSkin !== 'none') {
      options['skin'] = selectedSkin;
    }

    if (autoWidth) {
      options['autoWidth'] = autoWidth;
    }

    return (
      <SectionPage
        description={sectionDescription}
        title={sectionTitle}
      >
        <InteractiveExample
          component={Button}
          disabled={boolean('Disabled', false)}
          expanded={boolean('Expanded', false)}
          id={text('Id', 'button_id')}
          label={text('Label', 'Button Label')}
          onClick={() => alert('Clicked!')}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          size={select('Size', { S: 'Small', M: 'Medium', L: 'Large' }, 'M')}
          {...options}
        />
      </SectionPage>
    );
  });





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
    const selectedSkin = select('Skin', { 'none': 'Default', 'primary': 'Primary', 'ghost': 'Ghost', 'outline': 'Outline', 'outlineLight': 'Outline light' }, 'none');
    const href = text('Href', '');

    if (selectedSkin !== 'none') {
      options['skin'] = selectedSkin;
    }

    if (href !== '') {
      options['href'] = href;
    }

    if (selectedSkin === 'outlineLight') {
      options['previewSkin'] = 'secondary';
    }

    return (
      <SectionPage
        description={sectionDescription}
        title={sectionTitle}
      >
        <InteractiveExample
          autoWidth={boolean('Auto width', false)}
          component={Button}
          disabled={boolean('Disabled', false)}
          ellipsis={boolean('Ellipsis', false)}
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





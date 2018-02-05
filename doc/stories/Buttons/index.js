import React from 'react';
import { createSection } from '../../utils/index';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { Button } from '../../../src/components';

const sectionTitle = '4. Buttons';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', () => (
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
        outline={boolean('Outline', false)}
        size={select('Size', { M: 'Medium', L: 'Large' }, 'M')}
      />
    </SectionPage>
  ));





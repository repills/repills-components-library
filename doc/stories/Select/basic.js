import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { Select } from '../../../src/components';

const options = [
  {
    label: 'Option 1',
    value: 'value 1'
  },
  {
    label: 'Option 2 with a text very very long',
    value: 'value 2'
  },
  {
    label: 'Option 3 disabled',
    value: 'value 3',
    disabled: true
  },
  {
    label: 'Opzion 4',
    value: 'value 4'
  },
  {
    label: 'Option 5',
    value: 'value 5'
  },
];

export default (sectionTitle, sectionDescription) => () => {

  const optionsSelectedIndex = options.reduce((acc, item, index) => {
    acc[index] = item.label;
    return acc;
  }, {});
  optionsSelectedIndex['none'] = 'None';
  const selectedIndex = select('Selected index', optionsSelectedIndex, 'none');

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={Select}
        disabled={boolean('Disabled', false)}
        expanded={boolean('Expanded', false)}
        id={text('Id', 'button_id')}
        onChange={({ value, index }) => alert(`Value: ${value} - Index: ${index}`)}
        options={options}
        placeholder={text('Placeholder', 'Seleziona...')}
        previewMinHeight="300px"
        selectedIndex={selectedIndex !== 'none' ? parseInt(selectedIndex, 10) : null}
        size={select('Size', { M: 'Medium', L: 'Large' }, 'M')}
      />
    </SectionPage>
  );
};

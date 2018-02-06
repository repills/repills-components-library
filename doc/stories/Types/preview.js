import React from 'react';
import { select, number } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { TypePreview } from '../../../src/components';
import { types } from 'repills-config';

// Exclude extended types
const filteredTypes = Object.keys(types).filter(key => !key.includes('_'));
const typeOptions = filteredTypes.reduce((options, key) => {
  options[key] = types[key].label.singular;
  return options;
}, {});

export default (sectionTitle, sectionDescription) => () => {
  const type = select('Type', typeOptions, filteredTypes[0]);
  const selectedType = types[type];
  const navigateTo = id => alert(`Navigate to ${id}`);

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        color={selectedType.color}
        component={TypePreview}
        count={number('Count', 10)}
        icon={type.charAt(0).toUpperCase() + type.slice(1)}
        id={selectedType.id}
        label={selectedType.label}
        navigateTo={navigateTo}
      />
    </SectionPage>
  );
};

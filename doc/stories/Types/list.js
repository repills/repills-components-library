import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { TypesList } from '../../../src/components';
import { types } from 'repills-config';

const filteredTypes = Object.keys(types).filter(key => !key.includes('_'));

const data = filteredTypes.reduce((acc, key) => {
  acc[key] = types[key];
  acc[key].resources = [{}, {}];
  return acc;
}, {});

export default (sectionTitle, sectionDescription) => () => {

  const navigateTo = path => alert(`Navigate to ${path}`);

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={TypesList}
        navigateTo={navigateTo}
        shadeColor="#e0e0e0"
        types={data}
      />
    </SectionPage>
  );
};

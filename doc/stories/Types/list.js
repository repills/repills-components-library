import React from 'react';
import { SectionPage, InteractiveExample } from '../../utils/layout';
import { TypesList } from '../../../src/components';
import { types } from 'repills-config';

const filteredTypes = Object.keys(types).filter(key => !key.includes('_'));

const data = filteredTypes.reduce((acc, key) => {
  acc[key] = types[key];
  acc[key].resources = [{}, {}];
  return acc;
}, {});

export default (sectionTitle, sectionDescription) => () => {
  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={TypesList}
        types={data}
      />
    </SectionPage>
  );
};


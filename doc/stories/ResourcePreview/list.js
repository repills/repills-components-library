import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { ResourcesList } from '../../../src/components';
import { getRandomResourceList } from '../../utils/fixtures';

const onHandleDetailView = ({ reference }) => {
  alert(`Detail view for resource with reference: ${reference}`);
};

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={ResourcesList}
        dateType={select('Date type', { createdAt: 'Share date', publishedAt: 'Publish date' }, 'createdAt')}
        handleDetailView={onHandleDetailView}
        resources={getRandomResourceList(3,10).map(e => e.frontmatter)}
      />
    </SectionPage>
  );
};

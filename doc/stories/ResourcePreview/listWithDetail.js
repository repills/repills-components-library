import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { ResourcesListWithDetail } from '../../../src/components';
import { getResourceList } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const navigateToDetail = ({ slug, publishedAt }) => {
    alert(`Detail view for resource with slug: ${slug}`);
  };

  const generateDetailUrl = ({ slug, publishedAt }) => {
    return slug;
  };

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        breaks={{ XS: 4, SM: 6 }}
        component={ResourcesListWithDetail}
        dateType={select('Date type', { createdAt: 'Share date', publishedAt: 'Publish date' }, 'createdAt')}
        generateDetailUrl={generateDetailUrl}
        handleDetailView={({ resource }) => console.log('resource detail: ',resource)}
        navigateToDetail={navigateToDetail}
        navigateToSection={sectionId => alert('Navigate to section: ' + sectionId)}
        navigateToTopic={topicId => alert('Navigate to topic: ' + topicId)}
        resources={getResourceList(12).map(e => e.frontmatter)}
        showAllAction={{
          onClick: () => alert('Clicked on Show all button'),
          href: '/show/all/path'
        }}
      />
    </SectionPage>
  );
};

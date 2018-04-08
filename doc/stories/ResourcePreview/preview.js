import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { ResourcePreview } from '../../../src/components';
import { getRandomResource } from '../../utils/fixtures';

const randomResource = getRandomResource({}).frontmatter;

const onHandleDetailView = ({ reference }) => {
  alert(`Detail view for resource with reference: ${reference}`);
};

const navigateToDetail = ({ slug, publishedAt }) => {
  alert(`Detail view for resource with slug: ${slug}`);
};

const generateDetailUrl = ({ slug, publishedAt }) => {
  return slug;
};

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={ResourcePreview}
        dateType={select('Date type', { createdAt: 'Share date', publishedAt: 'Publish date' }, 'createdAt')}
        generateDetailUrl={generateDetailUrl}
        handleDetailView={onHandleDetailView}
        navigateToDetail={navigateToDetail}
        {...randomResource}
      />
    </SectionPage>
  );
};

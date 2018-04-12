import React from 'react';
import { number, boolean } from '@storybook/addon-knobs/react';
import { ResponsivePagination } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

export default (sectionTitle, sectionDescription) => () => {

  const itemsPerPage = number('Item per pagina', 5);
  const itemsTotalCount = number('Numero totale di item', 140);
  const currentPage = number('Pagina corrente', 1, {
    range: false,
    min: 1,
    max: Math.ceil(itemsTotalCount/itemsPerPage),
    step: 1,
  });

  const others = {};

  const hrefLink = boolean('Href link', false);

  if (hrefLink) {
    others['buildPagePath'] = index => `path/to/page/${index}`;
  }

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={ResponsivePagination}
        currentPage={currentPage}
        handleNavigateToPage={index => alert(`Navigate to page: ${index}`)}
        itemsPerPage={itemsPerPage}
        itemsTotalCount={itemsTotalCount}
        {...others}
      />
    </SectionPage>
  );
};

import React from 'react';
import { number } from '@storybook/addon-knobs/react';
import { ResponsivePagination } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

export default (sectionTitle, sectionDescription) => () => {

  const itemsPerPage = number('Item per pagina', 5);
  const itemsTotalCount = number('Numero totale di item', 70);
  const currentPage = number('Pagina corrente', 1, {
    range: false,
    min: 1,
    max: Math.ceil(itemsTotalCount/itemsPerPage),
    step: 1,
  });

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
      />
    </SectionPage>
  );
};

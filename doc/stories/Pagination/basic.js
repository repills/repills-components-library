import React from 'react';
import { number, boolean } from '@storybook/addon-knobs/react';
import { Pagination } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

export default (sectionTitle, sectionDescription) => () => {

  const itemsPerPage = number('Item per pagina', 5);
  const itemsTotalCount = number('Numero totale di item', 70);
  const rangePageDisplayed = number('Totale pagine visualizzate', 7);
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
        component={Pagination}
        currentPage={currentPage}
        handleNavigateToPage={index => alert(`Navigate to page: ${index}`)}
        itemsPerPage={itemsPerPage}
        itemsTotalCount={itemsTotalCount}
        rangePageDisplayed={rangePageDisplayed}
        {...others}
      />
    </SectionPage>
  );
};

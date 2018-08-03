import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  ProvideContainerQuery,
  Breadcrumb,
  ResponsivePagination,
  TopNavigation
} from '../../../src/components';
import {
  boolean,
  number
} from '@storybook/addon-knobs/react';
import theme from '../../../src/config/theme';
const {
  basic,
  neutral
} = theme.palettes;

const title = 'Components > Navigation';

const addons = {
  info: true,
};

//-----------
// BREADCRUMB
//-----------

const items = [
  {
    label: 'Item 1'
  },
  {
    label: 'Item 2'
  }
];

createNewSection({
  title,
  description: 'A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.',
  addons
})
  .add(
    'Breadcrumb',
    () => {
      return (
        <Breadcrumb
          items={items}
        />
      );
    }
  );

//-----------
// PAGINATION
//-----------

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Pagination',
    () => {

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

      const ExampleWithContainerQuery = ProvideContainerQuery(ResponsivePagination);

      return (
        <ExampleWithContainerQuery
          currentPage={currentPage}
          handleNavigateToPage={index => alert(`Navigate to page: ${index}`)}
          itemsPerPage={itemsPerPage}
          itemsTotalCount={itemsTotalCount}
          {...others}
        />
      );
    }
  );

//-----------
// PAGINATION
//-----------

createNewSection({
  title,
  description: 'Description will be here',
  addons: {
    info: true,
    backgrounds: [
      {
        name: 'Secondary',
        value: basic.secondary,
        default: true
      },
      {
        name: 'Dark',
        value: neutral.highest
      }
    ]
  }
})
  .add(
    'Main navigation',
    () => {
      const items = [
        {
          label: 'Contribute',
          onClick: ({ index }) => alert('Contribute')
        },
        {
          label: 'Star on GihHub',
          href: 'http://github.com'
        },
        {
          label: 'Item 3',
          onClick: ({ index }) => alert('Item 3'),
          hidden: true
        },
        {
          label: 'Item 4',
          onClick: ({ index }) => alert('Item 4')
        },
        {
          label: 'Contribute',
          onClick: ({ index }) => alert('Contribute')
        },
        {
          label: 'Star on GihHub',
          href: 'http://github.com'
        },
        {
          label: 'Item 3',
          onClick: ({ index }) => alert('Item 3')
        },
        {
          label: 'Item 4',
          onClick: ({ index }) => alert('Item 4')
        },
        {
          label: 'Contribute',
          onClick: ({ index }) => alert('Contribute')
        },
        {
          label: 'Star on GihHub',
          href: 'http://github.com'
        },
        {
          label: 'Item 3',
          onClick: ({ index }) => alert('Item 3')
        },
        {
          label: 'Item 4',
          onClick: ({ index }) => alert('Item 4')
        }
      ];

      const ExampleWithContainerQuery = ProvideContainerQuery(TopNavigation);

      return (
        <ExampleWithContainerQuery
          items={items}
          onClickLogo={() => alert('Logo clicked')}
        />
      );
    }
  );

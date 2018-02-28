import React from 'react';
import { TopNavigation } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components/index';

export default (sectionTitle, sectionDescription) => () => {


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

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={TopNavigation}
        items={items}
      />
    </SectionPage>
  );
};

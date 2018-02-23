import React from 'react';
import { number, text } from '@storybook/addon-knobs/react';
import { CodePreview } from '../../../src/components/index';
import { SectionPage, InteractiveExample } from '../../components/index';

export default (sectionTitle, sectionDescription) => () => {

  const code =
`---
title: 'The resource title'
tags: [jsx, react_component]
---`
;

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        children={text('Code snippet', code)}
        component={CodePreview}
        title={text('Title','Code snippet title')}
      />
    </SectionPage>
  );
};

import React from 'react';
import { KeywordsCloud } from '../../../src/components/index';
import { SectionPage, InteractiveExample } from '../../components/index';

const keywords = [
  'Reasons to use React',
  'Why I should use React',
  'Benefits of React',
  'React js props & cons',
  'What is React good for',
  'React advantages and disadvantages',
  'Advantages of React js over Angular js',
  'React vs Angular',
  'React vs Vue'
];

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={KeywordsCloud}
        keywords={keywords}
      />
    </SectionPage>
  );
};

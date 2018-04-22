import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { text } from '@storybook/addon-knobs/react';
import { Newsletter } from '../../../src/components';

export default (sectionTitle, sectionDescription) => () => {

  const options = {};
  const intro = text('Intro', `Repills is brought to you by the same authors of FullStack Bulletin, the weekly newsletter that aims to keep aspiring and experienced full stack developers up to date.`);
  const label = text('Label', 'Subscribe now to the weekly email.');
  const note = text('Note', `You will receive the <strong>best 7 links</strong> in your inbox every week, for free! No spam, ever :)`);

  if (intro !== '') {
    options['intro'] = intro;
  }

  if (label !== '') {
    options['label'] = label;
  }

  if (note !== '') {
    options['note'] = note;
  }

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={Newsletter}
        previewSkin="dark"
        {...options}
      />
    </SectionPage>
  );
};

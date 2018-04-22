import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { text } from '@storybook/addon-knobs/react';
import { Newsletter } from '../../../src/components';

export default (sectionTitle, sectionDescription) => () => {

  const options = {};
  const intro = text('Intro', `Repills is brought to you by the same authors of <a href="http://fullstackbulletin.com/" target="_blank">Fullstack Bulletin</a>, the weekly newsletter that aims to keep inspiring and keeping up to date full stack developers.`);
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

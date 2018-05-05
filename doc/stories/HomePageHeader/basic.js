import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { HomePageHeader } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

export default (sectionTitle, sectionDescription) => () => {

  const others = {};
  const title = text('Title', `<strong>Stay up to date</strong> with the latest cutting-edge technologies and <strong>improve your skills pill by pill</strong>, day by day.`);
  const description = text('Description', 'Repills is going to be the place to learn about web development and design through well-organized high-quality resources.');
  const hidePrimaryAction = boolean('Hide primary action', false);
  const hideSecondaryAction = boolean('Hide secondary action', false);

  if (!hidePrimaryAction) {
    others.primaryAction = {
      label: 'Take a look to our topics',
      onClick: () => alert('You have clicked on the primary action!')
    };
  }

  if (!hideSecondaryAction) {
    others.secondaryAction = {
      label: '300 resources available yet',
      onClick: () => alert('You have clicked on the secondary action!')
    };
  }

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Basic"
      title={sectionTitle}
    >
      <InteractiveExample
        component={HomePageHeader}
        description={description}
        previewSkin="secondary"
        title={title}
        {...others}
      />
    </SectionPage>
  );
};

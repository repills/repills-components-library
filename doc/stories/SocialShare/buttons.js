import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { SocialShare } from '../../../src/components';
import { text, select } from '@storybook/addon-knobs/react';

export default (sectionTitle, sectionDescription) => () => {

  const typeOptions = {
    facebook: 'Facebook',
    twitter: 'Twitter',
    linkedin: 'Linkedin',
    google: 'Google+',
    email: 'Email'
  };

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        // color="red"
        component={SocialShare}
        link={text('Link', 'http://repills.com')}
        text={text('text', 'Learn pill by pill on repills.com')}
        title={text('title', 'Pills around the web for web developers and UI designers')}
        type={select('Type', typeOptions, 'facebook')}
      />
    </SectionPage>
  );
};

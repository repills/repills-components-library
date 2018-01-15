import React from 'react';
import { createSection } from '../../utils/stories';
import { SectionPage } from '../../utils/layout';
import { Icon } from '../../../src/components';
import { types } from 'repills-config';

const sectionTitle = 'Icons';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

// Exclude extended types
const filteredTypes = Object.keys(types).filter(key => !key.includes('_'));

section
  .add('Types', () => (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      {
        filteredTypes.map(name => <Icon name={name} />)
      }
    </SectionPage>
  ));





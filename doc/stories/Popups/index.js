import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  Modal,
} from '../../../src/components';
import {
  select,
  boolean,
} from '@storybook/addon-knobs/react';
import { ChildDetail } from './childrenExample';

const title = 'Components > Popups ';

const addons = {
  info: true
};

//-----------------
// RESOURCE COUNTER
//-----------------

createNewSection({
  title,
  description: 'Description will be here',
  addons
})
  .add(
    'Modal',
    () => {
      const children = {
        detail: <ChildDetail />
      };

      const selectedChild = select(
        'Example content',
        {
          'detail': 'Modal with resource detail'
        },
        'detail'
      );

      return (
        <Modal
          children={children[selectedChild]}
          handleClose={() => alert('Handle Close modal!')}
          open={boolean('Open', true)}
          size={select('Size', { Small: 'S', Medium: 'M', Large: 'L' }, 'M')}
        />
      );
    }
  );

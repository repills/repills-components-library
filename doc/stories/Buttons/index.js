import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  Button,
  theme,
} from '../../../src/components';
import { text, boolean, select } from '@storybook/addon-knobs/react';

const { basic } = theme.palettes;
const title = 'Components > Buttons';

//-----------------
// STANDARD BUTTONS
//-----------------

createNewSection({
  title: `${title} / Standard`,
  description: 'They are commonly used to trigger an action.',
  addons: {
    info: true,
  }
})
  .add(
    'Playground',
    () => {
      const others = {};
      const autoWidth = boolean('Auto width', false);
      const disabled = boolean('Disabled', false);
      const ellipsis = boolean('Ellipsis', false);
      const expanded = boolean('Expanded', false);
      const size = select('Size', { Small: 'S', 'Medium': 'M', 'Large': 'L' }, 'M');
      const href = text('Href', '');
      const label = text('Label', 'Button Label');

      const selectedSkin = select(
        'Skin',
        {
          Default: 'none',
          Primary: 'primary',
          Ghost: 'ghost',
          Outline: 'outline',
          'Outline light': 'outlineLight',
          'Outline tertiary': 'outlineTertiary'
        },
        'none'
      );

      if (autoWidth) {
        others.autoWidth = true;
      }
      if (disabled) {
        others.disabled = true;
      }
      if (ellipsis) {
        others.ellipsis = true;
      }
      if (expanded) {
        others.expanded = true;
      }
      if (size !== 'M') {
        others.size = size;
      }
      if (selectedSkin !== 'none') {
        others.skin = selectedSkin;
      }
      if (href !== '') {
        others.href = href;
      }

      others.label = label;

      return (
        <Button
          onClick={() => {}}
          {...others}
        />
      );
    }
  );

const getCases = others => (
  <div>
    <h3>Basic</h3>
    <Button
      label="Basic Button"
      {...others}
    />

    <h3>Auto width</h3>
    <Button
      autoWidth
      label="Auto width"
      {...others}
    />

    <h3>Disabled</h3>
    <Button
      disabled
      label="Disabled Button"
      {...others}
    />

    <h3>Expanded</h3>
    <Button
      expanded
      label="Expanded Button"
      {...others}
    />

    <h3>Sizes</h3>
    <h4>Small</h4>
    <Button
      label="Small Button"
      size="S"
      {...others}
    />
    <h4>Medium (Default)</h4>
    <Button
      label="Default Button"
      {...others}
    />
    <h4>Large</h4>
    <Button
      label="Large Button"
      size="L"
      {...others}
    />
  </div>
);

//------------
// BASIC CASES
//------------

createNewSection({
  title: `${title} / Standard`,
  description: 'They are commonly used to trigger an action.'
})
  .add(
    'Basic',
    () => getCases({})
  );

//------------
// PRIMARY
//------------

createNewSection({
  title: `${title} / Standard`,
  description: 'They are commonly used to trigger an action.'
})
  .add(
    'Primary',
    () => getCases({ skin: 'primary' })
  );

//--------------
// OUTLINE CASES
//--------------
createNewSection({
  title: `${title} / Standard`,
  description: 'They are commonly used to trigger an action.'
})
  .add(
    'Outline',
    () => getCases({ skin: 'outline' })
  );

//--------------------
// OUTLINE LIGHT CASES
//--------------------
createNewSection({
  title: `${title} / Standard`,
  description: 'They are commonly used to trigger an action.',
  addons: {
    backgrounds: [
      {
        name: 'Default',
        value: basic.secondary,
        default: true
      }
    ]
  }
})
  .add(
    'Outline Light',
    () => getCases({ skin: 'outlineLight' })
  );

//--------------------
// OUTLINE LIGHT CASES
//--------------------
createNewSection({
  title: `${title} / Standard`,
  description: 'They are commonly used to trigger an action.'
})
  .add(
    'Outline Tertiary',
    () => getCases({ skin: 'outlineTertiary' })
  );

//------------
// GHOST CASES
//------------
createNewSection({
  title: `${title} / Standard`,
  description: 'They are commonly used to trigger an action.'
})
  .add(
    'Ghost',
    () => getCases({ skin: 'ghost' })
  );

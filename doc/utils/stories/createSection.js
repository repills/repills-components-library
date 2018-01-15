import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

export default function createSection({ title }) {
  const section = storiesOf(title, module);
  section.addDecorator(withKnobs);

  return section;
};

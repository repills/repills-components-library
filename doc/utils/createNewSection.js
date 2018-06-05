import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import backgrounds from '@storybook/addon-backgrounds';
import { withViewport } from '@storybook/addon-viewport';

export default function createNewSection({ title, description, addons }) {
  const section = storiesOf(title, module);
  const requiredAddons = addons ? addons : {};

  section
    .addDecorator(withKnobs)
    .addDecorator(withViewport('AppleMacBookAir11-inch'));

  Object.entries(requiredAddons).forEach(([key, value]) => {
    let _value;

    switch (key) {
      case 'backgrounds':
        _value = backgrounds(value);
        break;
      case 'centered':
        _value = centered;
        break;
      case 'info':
        _value = (story, context) => withInfo({
          text: description ? description : '',
        })(story)(context);
        break;
      default:
        _value = value;
    }

    section.addDecorator(_value);
  });

  return section;
}

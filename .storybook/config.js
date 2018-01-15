import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// Option defaults:
setOptions({
  name: 'DAB Components',
  addonPanelInRight: true,
});

function loadStories() {
  require('../doc/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
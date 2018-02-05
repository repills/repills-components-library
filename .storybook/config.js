import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// Option defaults:
setOptions({
  name: 'Repills Components',
  addonPanelInRight: true,
  sortStoriesByKind: true
});

function loadStories() {
  require('../doc/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
import { configure } from '@storybook/react'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { setOptions } from '@storybook/addon-options'
import extraViewports from './extra-viewports.json'

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...extraViewports,
  },
});

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: />/,
});

// Option defaults:
setOptions({
  name: 'Repills Components'
});

function loadStories() {
  require('../doc/index.js');
}

configure(loadStories, module);
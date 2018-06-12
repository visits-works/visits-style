import { configure, addDecorator } from '@storybook/react';
import { configureViewport, INITIAL_VIEWPORTS, withViewport } from '@storybook/addon-viewport';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';
import backgrounds from '@storybook/addon-backgrounds';

setOptions({
  name: 'Visits Technology',
  addonPanelInRight: false,
  hierarchyRootSeparator: /\|/,
  url: 'https://github.com/visits-works',
});

setDefaults({
  // inline: true,
  header: false,
  source: true,
  maxPropsIntoLine: 1
});


addDecorator((story, context) => withInfo()(story)(context));
addDecorator(withKnobs);
addDecorator(
  backgrounds([
    { name: 'light', value: '#f0f2f1', default: true },
    { name: 'dark', value: '#2e3532' },
  ])
);
addDecorator(withViewport());

configure(() => [
  require('../src/stories'),
], module);

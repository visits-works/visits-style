import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Select from '.';

const options = [
  { id: 1, name: 'options1' },
  { id: 2, name: 'options2' },
];

storiesOf('forms|Select', module)
  .add('default', () => (
    <div style={{ width: '350px' }}>
      <Select
        placeholder="Select!!12312iuehwfaiuewhfguiahwegivwegiuvhawiuoegoauwegouawegnoawegnvaowegnaug"
        options={options}
        optional={boolean('optional', false)}
        disabled={boolean('disabled', false)}
        outline={boolean('outline', false)}
      />
    </div>
  ))
  .add('outline', () => (
    <div style={{ width: '350px' }}>
      <Select
        placeholder="Select!!12312iuehwfaiuewhfguiahwegivwegiuvhawiuoegoauwegouawegnoawegnvaowegnaug"
        options={options}
        outline
      />
      <br />
      <Select
        placeholder="Select!!12312iuehwfaiuewhfguiahwegivwegiuvhawiuoegoauwegouawegnoawegnvaowegnaug"
        options={options}
        outline
        disabled
      />
    </div>
  ));

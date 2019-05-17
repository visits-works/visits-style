import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
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
      />
      <br />
      <Select
        placeholder="Select!!12312iuehwfaiuewhfguiahwegivwegiuvhawiuoegoauwegouawegnoawegnvaowegnaug"
        options={options}
        disabled
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

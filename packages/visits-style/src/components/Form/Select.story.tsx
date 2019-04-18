import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';

storiesOf('forms|Select', module)
  .add('default', () => (
    <div style={{ width: '350px' }}>
      <Select
        placeholder="Select!!12312iuehwfaiuewhfguiahwegivwegiuvhawiuoegoauwegouawegnoawegnvaowegnaug"
        options={[ { id: 1, name: 'options1' }, { id: 2, name: 'options2' } ]}
      />
    </div>
  ))
  .add('outline', () => (
    <div style={{ width: '350px' }}>
      <Select
        placeholder="Select!!12312iuehwfaiuewhfguiahwegivwegiuvhawiuoegoauwegouawegnoawegnvaowegnaug"
        options={[ { id: 1, name: 'options1' }, { id: 2, name: 'options2' } ]}
        outline
      />
    </div>
  ));


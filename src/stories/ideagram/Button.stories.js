import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from '@storybook/addon-knobs/react';
import { Button, Row } from '../../components';

const colorList = [
  null, 'white', 'light', 'dark', 'black', 'primary', 'link', 'info', 'success', 'warning', 'danger',
]

storiesOf('ideagram|Components/Button', module)
  .add('default(デフォルト)', () => (
    <Row center vcenter style={{ height: '100vh' }}>
      <Button
        onClick={action('clicked')}
        color={select('color', colorList)}
        outline={boolean('outline', false)}
        disabled={boolean('disabled', false)}
      >
        {text('Children', 'Hello World')}
      </Button>
    </Row>
  ))
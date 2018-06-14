/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { AppBar, Container, Button } from '../components';
import Logo from '../../docs/assets/img/visits.svg';

const colorList = [
  null, 'white', 'light', 'dark', 'black', 'primary', 'link', 'info', 'success', 'warning', 'danger',
];

storiesOf('Components|AppBar', module)
  .add('default', () => (
    <Container style={{ marginTop: '15vh' }}>
      <AppBar
        color="light"
        brand={<img src={Logo} alt="Visits Technology" />}
        to="#"
      >
        <ul>
          <li>
            <a href="#">link1</a>
          </li>
          <li>
            <a href="#">link2</a>
          </li>
          <li>
            <a href="#">link3</a>
          </li>
        </ul>
        <div>
          <Button color="warning" outline>
            Link
          </Button>
        </div>
      </AppBar>
    </Container>
  ));

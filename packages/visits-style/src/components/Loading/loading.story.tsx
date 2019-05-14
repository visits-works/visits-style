import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingBar from './Bar';
import Spinner from './Spinner';

import Button from '../../elements/Button';

class BarDemo extends React.Component<any, { loading: boolean }> {
  state = { loading: false };

  onClick = () => {
    this.setState(state => ({ loading: !state.loading }));
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <LoadingBar loading={this.state.loading} color="warning" background="#eee" />
        <br />
        <Button onClick={this.onClick}>Toggle Loading</Button>
      </div>
    );
  }
}

storiesOf('components|Loading', module)
  .add('loading Bar', () => (
    <BarDemo />
  ))
  .add('spinner', () => (
    <Spinner color="primary" width="5rem" height="5rem" />
  ))


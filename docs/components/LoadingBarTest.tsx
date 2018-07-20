import React, { PureComponent } from 'react';
import LoadingBar from '../../src/components/Loading/Indicator';
import Button from '../../src/components/Button';

export default class LoadingBarTest extends PureComponent {
  state = { loading: false };

  onClick = () => {
    this.setState({ loading: !this.state.loading });
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <LoadingBar loading={this.state.loading} />
        <br />
        <Button onClick={this.onClick}>Toggle Loading</Button>
      </div>
    );
  }
}

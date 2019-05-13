import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Collapse from '.';
import Box from '../Box';

class Default extends PureComponent {
  state = { show: false };
  onClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Collapse
        header={<button onClick={this.onClick}>click me</button>}
        show={this.state.show}
      >
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>Hello world!</div>
      </Collapse>
    );
  }
}

class Fancy extends PureComponent {
  state = { show: false };
  onClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Collapse
        header={<button onClick={this.onClick}>click me</button>}
        show={this.state.show}
        style={{ width: '100%' }}
      >
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>Hello world!</div>
      </Collapse>
    );
  }
}

storiesOf('components|Accordion', module)
  .add('default', () => <Default />)
  .add('multiple', () => (
    <>
      <Fancy />
      <Fancy />
      <Fancy />
    </>
  ));

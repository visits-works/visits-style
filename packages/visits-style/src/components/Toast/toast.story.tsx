import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import Toast from '.';
import Button from '../../elements/Button';

class ToastDemo extends Component<{ position: string, fixed: boolean }> {
  state = { list: [], position: 'top-left' };

  shouldComponentUpdate(_, state) {
    return state.list.length !== this.state.list.length ||
      state.position !== this.state.position;
  }

  addToast = () => {
    const colorList = ['warning', 'danger', 'info', 'primary', 'success'];
    const list = this.state.list.slice();
    const color = colorList[Math.floor(Math.random() * Math.floor(colorList.length))];
    const id = `_${Math.random().toString(36).substr(2, 9)}`;
    if (list.length % 2) {
      // @ts-ignore
      list.push({
        id, color,
        message: <span>looooooooooooooooooooooooooooooong list number: {list.length}</span>,
      });
    } else {
      // @ts-ignore
      list.push({ id, color, message: `list number: ${list.length}` });
    }
    this.setState({ list });
  }

  clearToast = (id: string) => {
    const list = this.state.list.filter((item: any) => item.id !== id);
    this.setState({ list });
  }

  clearAll = () => {
    this.setState({ list: [] });
  }

  onSelect = (e: any) => {
    this.setState({ position: e.target.value });
  }

  render() {
    const { list } = this.state;
    const { position, fixed } = this.props;
    return (
      <div>
        <Button color="info" onClick={this.addToast}>Toast!</Button>
        <Button color="danger" onClick={this.clearAll}>Clear All</Button>
        <Toast
          toasts={list}
          clear={this.clearToast}
          // @ts-ignore
          position={position}
          fixed={fixed}
        />
        <div style={{ paddingBottom: '100vh' }} />
      </div>
    );
  }
}

const positionList = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];

// function ToastDemo() {

// }

storiesOf('components|Toast', module)
  .add('default', () => (
    <ToastDemo
      position={select('position', positionList, 'top-left')}
      fixed={boolean('fixed', false)}
    />
  ));

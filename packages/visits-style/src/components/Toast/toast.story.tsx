import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Toast from '.';
import Button from '../Button';

class ToastDemo extends Component {
  state = { list: [], position: 'top-left' };

  addToast = () => {
    const colorList= ['warning', 'danger', 'info', 'primary', 'success'];
    const list = this.state.list.slice();
    const color = colorList[Math.floor(Math.random() * Math.floor(colorList.length))];
    const id = '_' + Math.random().toString(36).substr(2, 9);
    if (list.length % 2) {
      // @ts-ignore
      list.push({ id: id, color: color, message: <span>{'looooooooooooooooooooooooooooooong list number: ' + list.length}</span> });
    } else {
      // @ts-ignore
      list.push({ id: id, color: color, message: 'list number: ' + list.length });
    }
    this.setState({ list: list });
  }

  clearToast = (id: string) => {
    const list = this.state.list.filter((item: any) => item.id !== id);
    this.setState({ list: list });
  }

  clearAll() {
    this.setState({ list: [] });
  }

  onSelect = (e: any) => {
    this.setState({ position: e.target.value });
  }

  render() {
    const positionList = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
    const { list, position } = this.state;
    return (
      <div>
        <Button color="info" onClick={this.addToast}>Toast!</Button>
        <Button color="danger" onClick={this.clearAll}>Clear All</Button>
        <Toast toasts={list} clear={this.clearToast} position="top-left" />
      </div>
    );
  }
}

storiesOf('components|Toast', module)
  .add('default', () => (
    <ToastDemo />
  ));

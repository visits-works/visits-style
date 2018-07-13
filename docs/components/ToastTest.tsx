import * as React from 'react';
import Toast from '../../src/components/Toast';
import Button from '../../src/components/Button';
import { ColorType } from '../../src/types';

const colorList: Array<ColorType> = ['warning', 'danger', 'info', 'primary', 'success'];

interface ToastType {
  id: string;
  title?: string;
  message?: React.ReactNode;
  color?: ColorType;
}

interface State {
  list: Array<ToastType>;
}

export default class ToastTest extends React.Component<{}, State> {
  state: State = { list: [] }

  addToast = () => {
    const list = this.state.list;
    const color = colorList[Math.floor(Math.random() * Math.floor(colorList.length))]
    const id = '_' + Math.random().toString(36).substr(2, 9);
    list.push({ id, message: 'list number: ' + list.length, color });
    this.setState({ list });
  }

  clearToast = (id: string) => {
    const list = this.state.list.filter(item => item.id !== id);
    this.setState({ list });
  }

  clearAll = () => {
    this.setState({ list: [] });
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.addToast}>Toast!</Button>
        <Button color="danger" onClick={this.clearAll}>Clear All</Button>
        <Toast toasts={this.state.list} clear={this.clearToast} />
      </div>
    );
  }
}

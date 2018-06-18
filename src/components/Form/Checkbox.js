import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class Checkbox extends PureComponent {
  static defaultProps = {
    name: null,
    placeholder: null,
    children: null,
    checked: false,
    onChange: () => {},
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <label>
        <input type="checkbox" {...rest} />
        {children}
      </label>
    );
  }
}

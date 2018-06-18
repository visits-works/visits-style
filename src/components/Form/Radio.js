import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class Radio extends PureComponent {
  static defaultProps = {
    name: null,
    placeholder: null,
    children: null,
    onChange: () => {},
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <label>
        <input type="radio" {...rest} />
        {children}
      </label>
    );
  }
}

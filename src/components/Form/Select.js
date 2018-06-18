import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class Select extends PureComponent {
  static defaultProps = {
    name: null,
    placeholder: null,
    onChange: () => {},
  }

  render() {
    const { options, ...rest } = this.props;
    return (
      <select {...rest}>
        {options.map(({ id, name }) => (<option key={id} value={id}>{name}</option>))}
      </select>
    );
  }
}

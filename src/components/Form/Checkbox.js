import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
  display: inline-block;
  cursor: pointer;
  line-height: 1.25;
  position: relative;

  input {
    cursor: pointer;
    margin-right: 0.5em;
  }
`;

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
      <Wrapper>
        <input type="checkbox" {...rest} />
        {children}
      </Wrapper>
    );
  }
}

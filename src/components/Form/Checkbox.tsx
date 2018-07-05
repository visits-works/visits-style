// @flow
import * as React from 'react';
import styled from '../../styled';
import { InputProps } from './types';

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

interface Props extends InputProps {
  placeholder?: string;
  children?: string;
  checked?: boolean;
}

export default class Checkbox extends React.PureComponent<Props> {
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

import React, { PureComponent, ReactNode } from 'react';
import styled from '../../styled';
import { InputProps } from './style';

const Wrapper = styled.label`
  display: inline-block;
  cursor: pointer;
  line-height: 1.25;
  position: relative;

  input {
    cursor: pointer;
    margin-right: 0.5em;
  }

  input+label {

  }

  &:not(:first-child) {
    margin-left: 0.5em;
  }
`;

interface Props extends InputProps {
  children: ReactNode;
  checked?: boolean;
}

export default class Switch extends PureComponent<Props> {
  static defaultProps = {
    children: null,
    onChange: () => {},
  }

  id = `switch_${this.props.name}`;

  render() {
    const { children, ...rest } = this.props;
    return (
      <Wrapper>
        <input id={this.id} type="checkbox" {...rest} />
        <label htmlFor={this.id}>{children}</label>
      </Wrapper>
    );
  }
}
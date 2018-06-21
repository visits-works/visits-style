// @flow
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

  &:not(:first-child) {
    margin-left: 0.5em;
  }
`;

type Props = CommonInputType & {
  children?: any,
}

export default class Radio extends PureComponent<Props> {
  static defaultProps = {
    name: null,
    children: null,
    onChange: () => {},
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <Wrapper>
        <input type="radio" {...rest} />
        {children}
      </Wrapper>
    );
  }
}

import * as React from 'react';
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

interface Props extends InputProps {
  value: string | number;
  children?: React.ReactChild;
}

export default class Radio extends React.PureComponent<Props> {
  static defaultProps = {
    name: null,
    children: null,
    onChange: () => {},
  }

  id = `radio_${this.props.name}:${this.props.value}`

  render() {
    const { children, ...rest } = this.props;
    return (
      <Wrapper>
        <input id={this.id} type="radio" {...rest} />
        <label htmlFor={this.id}>{children}</label>
      </Wrapper>
    );
  }
}

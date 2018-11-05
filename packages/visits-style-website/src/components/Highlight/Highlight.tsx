import React, { Component } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-live';
import { HighlightStyle } from './styles';

interface Props {
  children: string;
  live?: boolean;
  onChange?: (code: string) => void;
  onError?: (e: any) => void;
}

interface State {
  code: string;
}

const Wrapper = styled(Editor)`
  ${HighlightStyle}
  margin-bottom: 0.725rem;

  &[contenteditable] {
    max-height: 300px;
    overflow-y: auto;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    outline: none;
  }
`;

export default class HighlightCode extends Component<Props, State> {
  static defaultProps = {
    live: false,
  }

  componentDidMount() {

  }

  onChange = (code: string) => {
    if (this.props.onChange) {
      this.props.onChange(code);
    }
  }

  render() {
    const { children, live } = this.props;
    return (
      <Wrapper code={children} onChange={this.onChange} contentEditable={live} />
    );
  }
}


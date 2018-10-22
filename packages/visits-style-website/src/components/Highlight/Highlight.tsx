import React, { Component } from 'react';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/xml-fold';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';


interface Props {
  className?: string;
  children: any;
  live?: boolean;
  onChange?: (code: string) => void;
  onError?: (e: any) => void;
}

interface State {
  code: string;
}

const Wrapper = styled(CodeMirror)`
  position: relative;
  font-weight: 400;
  max-width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;

  overflow: auto;
  max-height: 340px;
  font-family: Menlo, Monaco, "Courier New", monospace;
  tab-size: 1.5em;

  &.hover {
    border-color: ${({ theme }) => theme.warning};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.warning};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.link};
  }
`;

export default class HighlightCode extends Component<Props, State> {
  state = { code: this.props.children };

  shouldComponentUpdate(props: Props, state: State) {
    return this.state.code !== state.code;
  }

  onChange = (editor: any, data: any, value: string) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.setState({ code: value });
  }

  render() {
    const isReadOnly = this.props.onChange === undefined;
    return (
      <CodeMirror
        value={this.state.code}
        options={{
          mode: 'jsx',
          theme: 'material',
          lineNumbers: true,
          tabSize: 2,
          readOnly: (isReadOnly ? 'nocursor' : false)
        }}
        onBeforeChange={this.onChange}
      />
    );
  }
}


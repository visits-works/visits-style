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

import { CodeMirrorStyle } from './styles';

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
  ${CodeMirrorStyle}
  margin-bottom: 0.725rem;
`;

function removeLastLine(editor: any) {
  if (editor) {
    const lastLine = editor.lastLine()
    editor.doc.replaceRange('', { line: lastLine - 1 }, { line: lastLine })
  }
}

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
      <Wrapper
        value={this.state.code}
        options={{
          mode: 'jsx',
          lineNumbers: true,
          tabSize: 2,
          readOnly: (isReadOnly ? 'nocursor' : false)
        }}
        onBeforeChange={this.onChange}
        editorDidMount={removeLastLine}
      />
    );
  }
}


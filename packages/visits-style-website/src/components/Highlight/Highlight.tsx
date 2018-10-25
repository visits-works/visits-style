import React, { Component } from 'react';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';

try {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/jsx/jsx');
  require('codemirror/mode/css/css');
  require('codemirror/addon/edit/matchbrackets');
  require('codemirror/addon/edit/closetag');
  require('codemirror/addon/fold/xml-fold');
} catch(e) {
  console.error(e);
}

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
    const mode = this.props.className ? this.props.className.replace('language-', '') : 'jsx';
    return (
      <Wrapper
        value={this.state.code}
        options={{
          mode,
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


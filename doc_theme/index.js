import * as React from 'react';
import { theme, ThemeConfig, DocPreview } from 'docz';
import { ThemeProvider } from '../src/styled';

import { Button, Code, Content, Table } from '../src/components';
import publicTheme from '../src/theme/public';

import { Topbar, Renderer, Highlight, Page } from './components';

import '../src/styles/global';

const { Fragment } = React;

function Theme () {
  return (
    <ThemeProvider theme={config}>
      <Fragment>
        <Topbar />
        <DocPreview
          components={{
            render: Renderer,
            page: Page,
            table: (props) => <Table striped {...props} />,
            pre: Highlight,
            inlineCode: Code,
          }}
        />
      </Fragment>
    </ThemeProvider>
  );
}

export default Theme;

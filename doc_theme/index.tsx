import React, { Fragment } from 'react';
import { theme, ThemeConfig, DocPreview } from 'docz';
import { ThemeProvider } from 'styled-components';

import { Code, Table } from '../src/components';
import lightTheme from '../src/theme/light';

import { Topbar, Renderer, Highlight, Page } from './components';

import '../src/styles/global';

function render() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Fragment>
        <Topbar />
        <DocPreview
          components={{
            render: Renderer,
            page: Page,
            table: props => <Table striped {...props} />,
            pre: Highlight,
            inlineCode: Code,
          }}
        />
      </Fragment>
    </ThemeProvider>
  );
}

function Theme() {
  return (
    <ThemeConfig>
      {render}
    </ThemeConfig>
  );
}

export default theme({})(Theme);

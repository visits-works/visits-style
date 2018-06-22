import React, { Fragment } from 'react';
import { theme, ThemeConfig, DocPreview } from 'docz';
import { ThemeProvider } from 'styled-components';

import { Button, Code, Content, Table } from '@components';
import publicTheme from '@theme/public';

import { Topbar, Renderer, Highlight, Page } from './components';

import '@styles/global';

const Theme = () => (
  <ThemeConfig>
    {config => (
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
    )}
  </ThemeConfig>
)

export default theme(publicTheme)(Theme)

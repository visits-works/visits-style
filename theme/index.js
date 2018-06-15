import React, { Fragment } from 'react';
import { theme, ThemeConfig, DocPreview } from 'docz';
import { ThemeProvider } from 'styled-components';

import { Button, Code, Content } from '@components';
import publicTheme from '@theme/public';

import { Topbar, Renderer, Highlight } from './components';
import * as components from './components';

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
              page: components.Page,
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

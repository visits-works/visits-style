import * as React from 'react';
import { theme, ThemeConfig, DocPreview } from 'docz';
import { ThemeProvider } from 'styled-components';

import { Code, Table } from '../src/components';
import lightTheme from '../src/theme/light';

import { Topbar, Renderer, Highlight, Page } from './components';

import '../src/styles/global';

function Theme () {
  return (
    <ThemeConfig>
      {() => (
        <ThemeProvider theme={lightTheme}>
          <>
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
          </>
        </ThemeProvider>
    )}
    </ThemeConfig>
  );
}

export default theme()(Theme);

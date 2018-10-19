import React, { Fragment } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
// @ts-ignore
import { MDXProvider } from '@mdx-js/tag';
// @ts-ignore
import theme from '@theme/light';
import Row from '@components/Grid/Row';
import Col from '@components/Grid/Col';
import Container from '@components/Grid/Container';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

import components from './components';

import '@styles/global';

injectGlobal`
  html, body {
    height: 100%;
  }

  #___gatsby {
    min-height: 100%;
    height: 100%;
    & > div {
      min-height: 100%;
      height: auto;
    }
  }

  pre {
    font-family: inherit;
  }
`;

export default function Layout({ children, current }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Topbar current={current} />
        <Row style={{ height: '100%', minHeight: '100%' }}>
          <Sidebar current={current} />
          <Col>
            <MDXProvider components={components}>
              <Container style={{ overflowX: 'hidden' }}>
                {children}
              </Container>
            </MDXProvider>
          </Col>
        </Row>
      </Fragment>
    </ThemeProvider>
  );
}

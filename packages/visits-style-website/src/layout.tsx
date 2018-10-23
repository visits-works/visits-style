import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
// @ts-ignore
import { MDXProvider } from '@mdx-js/tag';
// @ts-ignore
import theme from '@theme/light';
// @ts-ignore
import { Row, Col, Container } from '@components';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

import components from './components';

import normalize from '@styles/normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
    width: 100%;
  }

  #___gatsby {
    height: 100%;
    min-height: 100%;
    & > div {
      height: 100%;
      max-height: 100%;
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
        <GlobalStyle />
        <Topbar current={current} />
        <Row style={{ flex: 1 }}>
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

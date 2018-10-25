import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
// @ts-ignore
import theme from '@theme/default';
// @ts-ignore
import { Row, Col, Container } from '@components';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import normalize from '@styles/normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
  }

  #___gatsby {
    height: 100%;
    min-height: 100%;
    & > div {
      height: 100%;
      max-height: 100%;
      display: flex;
      flex-direction: column;
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
        <main style={{ flexGrow: 1, paddingTop: '3.25rem', minHeight: 'calc(100vh - 3.25rem)' }}>
          <Row style={{ marginBottom: 0 }}>
            <Sidebar current={current} />
            <Col>
              {children}
            </Col>
          </Row>
          <Footer />
        </main>
      </Fragment>
    </ThemeProvider>
  );
}

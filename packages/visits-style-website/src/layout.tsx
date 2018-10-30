import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
// @ts-ignore
import theme from '@theme/default';
// @ts-ignore
import { Row, Col, Container } from '@components';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import GlobalStyle from './globalStyle';


export default function Layout({ children, current }: any) {
  const colStyle = current ? undefined : { padding: 0 };
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Topbar current={current} />
        <main style={{ flex: 1, paddingTop: '3.2rem', minHeight: 'calc(100vh - 3.2rem)' }}>
          <Row style={{ margin: 0 }}>
            {current ? (<Sidebar current={current} />) : null}
            <Col style={colStyle}>
              {children}
            </Col>
          </Row>
          <Footer />
        </main>
      </Fragment>
    </ThemeProvider>
  );
}

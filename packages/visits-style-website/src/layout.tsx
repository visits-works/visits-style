import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Row, Col, Container, defaultTheme } from 'visits-style';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import GlobalStyle from './globalStyle';

const theme = {
  ...defaultTheme,
};


export default function Layout({ children, current }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Topbar current={current} />
        <Container as="main" style={{ margin: 0, marginTop: '3.25rem' }} fluid>
          <Row style={{ margin: 0 }}>
            {current !== 'index.mdx' ? (<Sidebar current={current} />) : null}
            <Col size={10} auto style={{ flex: 1, backgroundColor: 'white' }}>
              {children}
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

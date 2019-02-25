import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@theme/default';
// @ts-ignore
import { Row, Col, Container } from '@components';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import GlobalStyle from './globalStyle';

const theme = {
  ...defaultTheme,
  // tslint:disable-next-line
  fontFamily: '-apple-system,BlinkMacSystemFont,"Helvetica Neue",HelveticaNeue,"Hiragino Kaku Gothic ProN","游ゴシック Medium",YuGothic,YuGothicM,メイリオ,Meiryo,sans-serif',
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
            <Col style={{ flex: 1, backgroundColor: 'white' }}>
              {children}
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

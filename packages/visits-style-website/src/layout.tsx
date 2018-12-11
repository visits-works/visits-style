import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@theme/default';
// @ts-ignore
import { Row, Col } from '@components';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import GlobalStyle from './globalStyle';

const theme = {
  ...defaultTheme,
  // tslint:disable-next-line
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,ヒラギノ角ゴシック,Meiryo,Helvetica,"MS PGothic",Arial,sans-serif',
};


export default function Layout({ children, current }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Topbar current={current} />
        <main style={{ flex: 1, paddingTop: '3.2rem', minHeight: 'calc(100vh - 3.2rem)' }}>
          <Row style={{ margin: 0 }}>
            {current !== 'index.mdx' ? (<Sidebar current={current} />) : null}
            <Col style={{ padding: 0 }}>
              {children}
            </Col>
          </Row>
          <Footer />
        </main>
      </Fragment>
    </ThemeProvider>
  );
}

import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Row, Col, Container, defaultTheme, mediaMobile } from 'visits-style';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import GlobalStyle from './globalStyle';

const theme = {
  ...defaultTheme,
};

const Main = styled(Container).attrs({ as: 'main' })`
  margin: 0;
  margin-top: 3.25rem;
  ${mediaMobile} {
    margin-top: 2.625rem;
  }
`;


export default function Layout({ children, current }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Topbar current={current} />
        <Main fluid>
          <Row>
            {current !== 'index.mdx' ? (<Sidebar current={current} />) : null}
            <Col size={current !== 'index.mdx' ? 10 : 12} auto style={{ backgroundColor: 'white' }}>
              {children}
            </Col>
          </Row>
        </Main>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

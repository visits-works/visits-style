import React from 'react';
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
import { Fragment } from 'react';

injectGlobal`
  pre {
    font-family: inherit;
  }
`;

export default function Layout({ children, current }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Topbar current={current} />
        <Row>
          <Sidebar current={current} />
          <Col auto>
            <MDXProvider components={components}>
              <Container>
                {children}
              </Container>
            </MDXProvider>
          </Col>
        </Row>
      </Fragment>
    </ThemeProvider>
  );
}

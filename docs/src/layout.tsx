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

injectGlobal`
  pre {
    font-family: inherit;
  }
`;

export default function Layout({ children, current }: any) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: '100vh' }}>
        <Topbar current={current} />
        <Row style={{ minHeight: '100%' }}>
          <Sidebar current={current} />
          <Col auto>
            <Container fluid style={{ minHeight: '100%' }}>
              <MDXProvider components={components}>
                {children}
              </MDXProvider>
            </Container>
          </Col>
        </Row>
      </div>
    </ThemeProvider>
  );
}

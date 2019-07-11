import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import { Container, mediaMobile, defaultTheme, Row, Col } from 'visits-style';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import components from './components';
import PropsTable from './components/Props';
import GlobalStyle from './globalStyle';

const theme = {
  ...defaultTheme,
};

const Header = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 0.2rem;
  color: ${({ theme }) => theme.textStrong};
`;

const Desc = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textLight};
  margin-bottom: 2rem;
`;

const Main = styled(Container).attrs({ as: 'main' })`
  margin: 0;
  margin-top: 3.25rem;
  ${mediaMobile} {
    margin-top: 2.625rem;
  }
`;

export const pageQuery = graphql`
  query($id: String!, $import: String) {
    site {
      siteMetadata {
        title
        docsLocation
        description
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
      code {
        body
      }
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
    }
    file(fields: {component: {eq: $import}}) {
      fields {
        component
        meta {
          props {
            name
            description
            required
            type
          }
        }
      }
    }
  }
`;

function renderDoc(data: any) {
  const {
    mdx,
    site: {
      siteMetadata: { title, description }
    },
    file,
  } = data;
  const current = mdx.parent.relativePath;

  if (current === 'index.mdx') {
    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Helmet>
        <title>{title}{mdx.frontmatter.title ? ` > ${mdx.frontmatter.title}` : ''}</title>
        <meta name="description" content={mdx.frontmatter.description || description} />
      </Helmet>
      <Container>
        {mdx.frontmatter.title ? (<Header>{mdx.frontmatter.title}</Header>) : null}
        {mdx.frontmatter.description ? (<Desc>{mdx.frontmatter.description}</Desc>) : null}
        {file.fields && <PropsTable fields={file.fields} />}
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Container>
    </Fragment>
  );
}

export default function MDXRuntime({ data }: any) {
  const current = data.mdx.parent.relativePath;

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Topbar current={current} />
        <Main fluid>
          <Row>
            {current !== 'index.mdx' ? (<Sidebar current={current} />) : null}
            <Col size={current !== 'index.mdx' ? 10 : 12} auto style={{ backgroundColor: 'white' }}>
              <MDXProvider components={components}>
                {renderDoc(data)}
              </MDXProvider>
            </Col>
          </Row>
        </Main>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

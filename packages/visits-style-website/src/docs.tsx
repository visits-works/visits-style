import React, { Fragment, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// @ts-ignore
import { MDXRenderer } from 'gatsby-plugin-mdx';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import { Container, mediaMobile, defaultTheme, Row, Col } from 'visits-style';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import components from './components';
import PropsTable from './components/Props';
import GlobalStyle from './globalStyle';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

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

const Main = styled(Row).attrs({ as: 'main' })`
  margin-top: 3.25rem;
  padding-top: 0;
  min-height: calc(100vh - 7.5rem);
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
      fields {
        slug
      }
      body
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

  if (mdx.parent.relativePath === 'index.mdx') {
    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <MDXRenderer>{mdx.body}</MDXRenderer>
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
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Container>
    </Fragment>
  );
}

export default function MDXRuntime({ data }: any) {
  const [isDark, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const val = window.localStorage.getItem('darkTheme');
      if (val) return JSON.parse(val);
      const md = window.matchMedia('(prefers-color-scheme: dark)');
      return md.matches;
    }
    return false;
  });

  const toggleTheme = () => {
    window.localStorage.setItem('darkTheme', String(!isDark));
    setDarkMode(!isDark);
  };

  const current = data.mdx.parent.relativePath;
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Fragment>
        <GlobalStyle />
        <Topbar current={current} toggleTheme={toggleTheme} isDark={isDark} />
        <Main>
          {current !== 'index.mdx' ? (<Sidebar current={current} />) : null}
          <Col
            size={current !== 'index.mdx' ? 10 : 12}
            style={{
              padding: current !== 'index.mdx' ? undefined : 0,
            }}
            auto
          >
            <MDXProvider components={components}>
              {renderDoc(data)}
            </MDXProvider>
          </Col>
        </Main>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

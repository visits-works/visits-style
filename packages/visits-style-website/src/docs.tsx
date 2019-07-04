import React, { Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
// @ts-ignore
import { MDXProvider } from '@mdx-js/tag';
import { Container } from 'visits-style';

import components from './components';

import Layout from './layout';

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

function renderDoc(mdx: any, title: string, description?: string) {
  if (mdx.parent.relativePath === 'index.mdx') {
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
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Container>
    </Fragment>
  );
}

export default function MDXRuntime({ data }: any) {
  const {
    mdx,
    site: {
      siteMetadata: { title, description }
    }
  } = data;
  const current = mdx.parent.relativePath;
  console.log(data);

  return (
    <Layout current={current}>
      <MDXProvider components={components}>
        {renderDoc(mdx, title, description)}
      </MDXProvider>
    </Layout>
  );
}

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
// @ts-ignore
import { MDXProvider } from '@mdx-js/tag';
// @ts-ignore
import { Container } from '@components';

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

const Footer = styled.footer`
  margin-top: 0.725rem;
  text-align: right;
  font-size: 0.8rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

export const pageQuery = graphql`
  query($id: String!) {
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
  }
`;


export default class MDXRuntime extends Component {
  render() {
    // @ts-ignore
    const { data } = this.props;
    const {
      mdx,
      site: {
        siteMetadata: { title, docsLocation, description }
      }
    } = data;

    // @ts-ignore
    const current = this.props['*'];
    console.log(this.props);
    return (
      <Layout current={current}>
        <MDXProvider components={components}>
          <Fragment>
            <Helmet>
              <title>{title}{mdx.frontmatter.title ? ` > ${mdx.frontmatter.title}` : ''}</title>
              <meta name="description" content={mdx.frontmatter.description || description} />
            </Helmet>
            {mdx.frontmatter.title ? (<Header>{mdx.frontmatter.title}</Header>) : null}
            {mdx.frontmatter.description ? (<Desc>{mdx.frontmatter.description}</Desc>) : null}
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </Fragment>
        </MDXProvider>
      </Layout>
    );
  }
}

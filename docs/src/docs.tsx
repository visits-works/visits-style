import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

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
        docsLocation
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
    const { data, ...rest } = this.props;
    const {
      mdx,
      site: {
        siteMetadata: { docsLocation }
      }
    } = data;

    // @ts-ignore
    const current = this.props['*'];
    return (
      <Layout current={current}>
        <Fragment>
          <Helmet>
            <title>{mdx.frontmatter.title}</title>
            <meta name="description" content={mdx.frontmatter.description} />
          </Helmet>
          <Header>{mdx.frontmatter.title}</Header>
          <Desc>{mdx.frontmatter.description}</Desc>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
          <Footer>
            <a href={`${docsLocation}/${mdx.parent.relativePath}`}>
              edit this page on GitHub
            </a>
          </Footer>
        </Fragment>
      </Layout>
    );
  }
}

import React, { Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// @ts-ignore
import { MDXRenderer } from 'gatsby-plugin-mdx';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import { Container, mediaMobile, Row, Col } from 'visits-style';
import Sidebar from './components/Sidebar';

import components from './components';
import PropsTable from './components/Props';

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
            defaultValue
          }
        }
      }
    }
  }
`;

export default function MDXRuntime({ data }: any) {
  const current = data.mdx.parent.relativePath;
  const {
    mdx,
    site: {
      siteMetadata: { title, description }
    },
    file,
  } = data;
  const isMain = data.mdx.parent.relativePath === 'index.mdx';

  return (
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
          <Fragment>
            <Helmet>
              <title>
                {title}
                {mdx.frontmatter.title ? ` > ${mdx.frontmatter.title}` : ''}
              </title>
              <meta name="description" content={mdx.frontmatter.description || description} />
            </Helmet>
            {isMain && <MDXRenderer>{mdx.body}</MDXRenderer>}
            {!isMain && (
              <Container>
                {mdx.frontmatter.title ? (<Header>{mdx.frontmatter.title}</Header>) : null}
                {mdx.frontmatter.description ? (<Desc>{mdx.frontmatter.description}</Desc>) : null}
                {file.fields && <PropsTable fields={file.fields} />}
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </Container>
            )}
          </Fragment>
        </MDXProvider>
      </Col>
    </Main>
  );
}

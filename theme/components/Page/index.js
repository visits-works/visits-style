// @flow
import React, { Fragment } from 'react';
import { PageProps } from 'docz'
import styled from 'react-emotion'

import { Container, Row, Col } from '@components'
import { Sidebar } from '../index'

const Wrapper = Container.extend`
  h1[id], h2[id], h3[id], h4[id] {
    a {
      position: absolute;
      right: calc(100% + 1rem);
    }
  }
`;

export const Page: SFC<PageProps> = ({ children, doc, ...props }) => {
  const { parent, sidebar, fullpage } = doc
  const showSidebar = Boolean(parent || sidebar)

  if (showSidebar) {
    return (
      <Row>
        <Sidebar parent={parent || doc.name} active={props.match.url} />
        <Col><Wrapper>{children}</Wrapper></Col>
      </Row>
    );
  }

  return (<Wrapper>{children}</Wrapper>);
}

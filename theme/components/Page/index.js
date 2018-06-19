import React, { Fragment } from 'react';
import { PageProps } from 'docz'
import styled from 'styled-components'

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

const Header = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 0.2rem;
  color: ${({ theme }) => theme.textStrong};
`;

const Desc = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textLight};

  margin-bottom: 2rem;
`;

function renderChildren({ title, name, description }, children) {
  return (
    <Wrapper>
      <Header>{ title || name }</Header>
      {description && <Desc>{description}</Desc>}
      {children}
    </Wrapper>
  );
}

export function Page({ children, doc, ...props }) {
  const { parent, sidebar, fullpage } = doc;
  const showSidebar = Boolean(parent || sidebar);

  const render = renderChildren(doc, children);

  if (showSidebar) {
    return (
      <Row>
        <Sidebar parent={parent || doc.name} active={props.match.url} />
        <Col>{render}</Col>
      </Row>
    );
  }

  return render;
}

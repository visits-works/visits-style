import * as React from 'react';
import styled from 'styled-components'

import { Container, Row, Col } from '../../../src/components'
import Sidebar from '../Sidebar'

const Wrapper = styled(Container)`
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

interface CProps {
  title?: string;
  name?: string;
  description?: any;
}

function renderChildren({ title, name, description }: CProps, children: React.ReactChildren) {
  return (
    <Wrapper>
      <Header>{ title || name }</Header>
      {description && <Desc>{description}</Desc>}
      {children}
    </Wrapper>
  );
}

interface Props {
  children: React.ReactChildren;
  doc: any;
  match: { url: string };
}

export default function Page({ children, doc, ...props }: Props) {
  const { parent, sidebar, fullpage } = doc;
  const showSidebar = Boolean(parent || sidebar);

  const render = renderChildren(doc, children);

  if (showSidebar) {
    return (
      <Row style={{ marginTop: '2.8rem' }}>
        <Sidebar parent={parent || doc.name} active={props.match.url} />
        <Col>{render}</Col>
      </Row>
    );
  }

  return <div style={{ marginTop: '2.8rem' }}>{render}</div>;
}

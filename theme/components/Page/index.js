// @flow
import React from 'react'
import { Fragment, SFC } from 'react'
import { PageProps } from 'docz'
import styled from 'react-emotion'

import { Container, Row, Col } from '@components'
import { Sidebar } from '../index'

export const Page: SFC<PageProps> = ({ children, doc, ...props }) => {
  const { parent, sidebar, fullpage } = doc
  const showSidebar = Boolean(parent || sidebar)

  return (
    <Container>
      {showSidebar ? (
        <Row>
          <Sidebar parent={parent || doc.name} active={props.match.url} />
          <Col>{children}</Col>
        </Row>
      ) : (
        children
      )}
    </Container>
  )
}

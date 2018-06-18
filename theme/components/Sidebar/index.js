import * as React from 'react'
import { Fragment, SFC } from 'react'
import { Docs, Entry, Link } from 'docz'
import { Col, SideMenu, MenuList, MenuLabel } from '@components'
import styled from 'styled-components'

const Menu: SFC<MenuProps> = ({ doc, active }) => (
  <li>
    <Link to={doc.route}>{doc.name}</Link>
    {active === doc.route && (
      <ul>
        {doc.headings.map(
          heading =>
            heading.depth > 1 &&
            heading.depth < 3 && (
              <li key={heading.slug}><a href={`#${heading.slug}`}>{heading.value}</a></li>
            )
        )}
      </ul>
    )}
  </li>
)

export const Sidebar: SFC<SidebarProps> = ({ parent, active }) => (
  <Col narrow style={{ maxWidth: '250px' }}>
    <Docs>
      {({ docs: allDocs }) => {
        const docs = allDocs.filter(doc => doc.parent === parent)

        return (
          <SideMenu style={{ position: 'sticky', top: '3.5rem', padding: '1.5rem' }}>
            <MenuList>
              {docs.map(doc => <Menu key={doc.id} doc={doc} active={active} />)}
            </MenuList>
          </SideMenu>
        )
      }}
    </Docs>
  </Col>
)

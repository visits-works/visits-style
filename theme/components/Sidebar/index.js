import * as React from 'react'
import { Fragment, SFC } from 'react'
import { Docs, Entry, Link } from 'docz'
import { Col, SideMenu, MenuList, MenuLabel } from '@components'
import styled from 'styled-components'

const Menu = SideMenu.extend`
  width: 250px;
  position: sticky;
  top: 3.5rem;
  padding: 1.5rem;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const MenuItem: SFC<MenuProps> = ({ doc, active }) => (
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
  <Col narrow>
    <Docs>
      {({ docs: allDocs }) => {
        const docs = allDocs.filter(doc => doc.parent === parent)

        return (
          <Menu>
            <MenuList>
              {docs.map(doc => <MenuItem key={doc.id} doc={doc} active={active} />)}
            </MenuList>
          </Menu>
        )
      }}
    </Docs>
  </Col>
)

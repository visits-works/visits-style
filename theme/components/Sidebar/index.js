// @flow
import * as React from 'react'
import { Fragment, SFC } from 'react'
import { Docs, Entry, Link as BaseLink } from 'docz'
import { Col } from '@components'
import styled from 'styled-components'

const SidebarWrapper = styled.div`
  min-height: 100%;
`

const Wrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Link = styled(BaseLink)`
  font-size: 18px;
  padding: 5px 0;

  &,
  &:visited {
    color: ${p => p.theme.grayDark};
  }

  &.active,
  &:hover {
    color: ${p => p.theme.link};
  }
`

const SmallLink = styled.a`
  font-size: 16px;
  padding: 0 0 5px 10px;

  &,
  &.active,
  &:visited {
    color: ${p => p.theme.grayDark};
  }
`

const Submenu = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`

const Menu: SFC<MenuProps> = ({ doc, active }) => (
  <Fragment>
    <Link to={doc.route}>{doc.name}</Link>
    {active === doc.route && (
      <Submenu>
        {doc.headings.map(
          heading =>
            heading.depth > 1 &&
            heading.depth < 3 && (
              <SmallLink key={heading.slug} href={`#${heading.slug}`}>
                {heading.value}
              </SmallLink>
            )
        )}
      </Submenu>
    )}
  </Fragment>
)

export const Sidebar: SFC<SidebarProps> = ({ parent, active }) => (
  <Col narrow style={{ maxWidth: '250px' }}>
    <Docs>
      {({ docs: allDocs }) => {
        const docs = allDocs.filter(doc => doc.parent === parent)

        return (
          <SidebarWrapper>
            <Wrapper>
              {docs.map(doc => <Menu key={doc.id} doc={doc} active={active} />)}
            </Wrapper>
          </SidebarWrapper>
        )
      }}
    </Docs>
  </Col>
)

import React from 'react';
import { Docs, Link } from 'docz';
import { AppBar } from '@components';
import Logo from '@assets/visits';

export const isActive = (route: string) => (match: any, location: any) =>
  (match && match.url === location.pathname) ||
  (location.pathname.startsWith(route) && route !== '/')

export const Topbar = () => (
  <AppBar
    brand={<Link to="/"><Logo /></Link>}
    color="dark"
    sticky
    backdrop
    style={{ zIndex: 9999 }}
  >
    <Docs>
      {({ docs: allDocs }) => {
        const docs = allDocs.filter(doc => !doc.parent).sort((a, b) => a.order > b.order)

        return (
          <ul>
            {docs.map(doc => (
              <li key={doc.id}>
                <Link to={doc.route} isActive={isActive(doc.route)}>
                  {doc.name}
                </Link>
              </li>
            ))}
          </ul>
        )
      }}
    </Docs>
  </AppBar>
)

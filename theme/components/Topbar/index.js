// @flow
import React from 'react';
import { Docs, Link } from 'docz';
import { AppBar } from '@components';
import Logo from '@assets/visits.svg';

export const isActive = (route: string) => (match: any, location: any) =>
  (match && match.url === location.pathname) ||
  (location.pathname.startsWith(route) && route !== '/')

export const Topbar = () => (
  <AppBar brand={<img src={Logo} alt="Visits-style" />} color="dark">
    <Docs>
      {({ docs: allDocs }) => {
        const docs = allDocs.filter(doc => !doc.parent)

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

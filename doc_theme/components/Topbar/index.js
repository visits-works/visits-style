import * as React from 'react';
import { Docs, Link } from 'docz';
import GithubIcon from 'react-icons/lib/go/mark-github';
import AppBar from '../../../src/components/AppBar';
import Logo from '../../assets/visits';

export const isActive = (route: string) => (match: any, location: any) =>
  (match && match.url === location.pathname) ||
  (location.pathname.startsWith(route) && route !== '/')

export default function Topbar() {
  return (
    <AppBar
      brand={<Link to="/"><Logo /></Link>}
      color="dark"
      fixed
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
      <a href="https://github.com/visits-works/visits-style" target="_blank" style={{ fontSize: '1.5rem' }}>
        <GithubIcon />
      </a>
    </AppBar>
  );
}

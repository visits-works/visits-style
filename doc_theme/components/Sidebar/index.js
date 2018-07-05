import * as React from 'react';
import { Docs, Link } from 'docz';
import styled from '../../../src/styled';
import { Col, SideMenu, MenuList } from '../../../src/components';
import { mediaMobile } from '../../../src/utils';

const Menu = styled(SideMenu)`
  width: 250px;
  position: sticky;
  top: 3.5rem;
  padding: 1.5rem;

  ${mediaMobile`
    position: relative;
    top: 0;
    width: calc(100vw - 3rem);
  `}
`;

const MenuItem = ({ doc, active }) => (
  <li>
    <Link to={doc.route}>{doc.name}</Link>
    {active === doc.route && doc.headings && (
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

export default function Sidebar({ parent, active }: SidebarProps): React.SFC<SidebarProps> {
  function renderDocs({ docs: allDocs }) {
    const docs = allDocs.filter(doc => doc.parent === parent);
    const parentDoc = allDocs.filter(doc => doc.name === parent)[0];
    return (
      <Menu>
        <MenuList>
          <MenuItem doc={{ name: 'Overview', route: parentDoc.route }} active={active} />
          {docs.map(doc => <MenuItem key={doc.id} doc={doc} active={active} />)}
        </MenuList>
      </Menu>
    );
  }

  return (
    <Col narrow>
      <Docs>
        {renderDocs}
      </Docs>
    </Col>
  );
}

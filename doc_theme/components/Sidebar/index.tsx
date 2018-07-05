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

interface SidebarProps {
  parent: string;
  active: string;
}

interface DocProps {
  doc: { headings?: Array<any>, route?: any, name?: any };
  docs?: Array<any>;
  active?: any;
}

const MenuItem = ({ doc, active }: DocProps) => (
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

export default class Sidebar extends React.PureComponent<SidebarProps> {

  renderDocs = ({ docs: allDocs }: { docs: Array<any> }) => {
    const { active, parent } = this.props;
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

  render() {
    return (
      <Col narrow>
        <Docs>
          {this.renderDocs}
        </Docs>
      </Col>
    );
  }
}
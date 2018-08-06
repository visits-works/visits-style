import React, { PureComponent } from 'react';
import { RenderComponentProps } from 'docz';
import styled from 'styled-components';
import Highlight from '../Highlight';

const Playground = styled.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.border};
  border-bottom: none;
`;

interface Props {
  component: any;
  code: any;
}

export default class Render extends PureComponent<RenderComponentProps> {
  render() {
    const { className, style, component, code } = this.props;
    return (
      <div>
        <Playground className={className} style={style}>
          {component}
        </Playground>
        <Highlight>{code}</Highlight>
      </div>
    );
  }
}

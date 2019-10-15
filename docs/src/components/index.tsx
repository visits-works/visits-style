import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Table, Tag } from 'visits-style';
import Highlight from './Highlight';
import H2 from './H2';

const H1 = styled.h1` margin-bottom: 1rem; `;

export default {
  h1: H1,
  h2: H2,
  code: Highlight,
  table: Table,
  pre: Fragment,
  inlineCode: ({ children }: any) => <Tag as="code" style={{ fontSize: '1rem', userSelect: 'auto', cursor: 'auto' }}>{children}</Tag>,
};

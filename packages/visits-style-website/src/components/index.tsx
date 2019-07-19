import React, { Fragment } from 'react';
import { Table, Tag } from 'visits-style';
import Highlight from './Highlight';
import H2 from './H2';

export default {
  h2: H2,
  code: Highlight,
  table: Table,
  pre: Fragment,
  inlineCode: ({ children }: any) => <Tag as="code" style={{ fontSize: '1rem', userSelect: 'auto', cursor: 'auto' }}>{children}</Tag>,
};

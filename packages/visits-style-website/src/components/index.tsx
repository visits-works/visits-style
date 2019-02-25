import React, { Fragment } from 'react';
// @ts-ignore
import { Table, Tag } from '@components';
import Highlight from './Highlight';
import H2 from './H2';

export default {
  h2: H2,
  pre: Fragment,
  code: Highlight,
  table: Table,
  inlineCode: ({ children }: any) => <Tag as="code" style={{ fontSize: '1rem', userSelect: 'auto', cursor: 'auto' }}>{children}</Tag>,
};

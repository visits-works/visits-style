import React, { Fragment } from 'react';
// @ts-ignore
import { Tag } from '@components';
import Highlight from './Highlight';
import H2 from './H2';

export default {
  h2: H2,
  pre: Fragment,
  code: Highlight,
  inlineCode: ({ children }: any) => <Tag as="code" style={{ userSelect: 'auto', cursor: 'auto' }}>{children}</Tag>,
};

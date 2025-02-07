import React from 'react';
import type { Preview } from '@storybook/react';

import './preview.css';

export default {
  decorators: [(Story) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '65vh' }}>
      <Story />
    </div>
  )],
} as Preview;

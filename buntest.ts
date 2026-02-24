import { afterEach } from 'bun:test';

import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

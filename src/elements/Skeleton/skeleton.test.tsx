import { render } from '@testing-library/react';

import Skeleton from '.';

describe('Skeleton', () => {
  it('rendered without error', () => {
    render(<Skeleton />);
  });
});

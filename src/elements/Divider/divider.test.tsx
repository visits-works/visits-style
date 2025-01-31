import { render } from '@testing-library/react';

import Divider from '.';

describe('Divider', () => {
  it('rendered without error', () => {
    render(
      <div>
        content 1
        <Divider />
        content 2
      </div>
    );
  });
});

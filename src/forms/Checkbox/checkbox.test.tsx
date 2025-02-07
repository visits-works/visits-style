import { render } from '@testing-library/react';

import Checkbox from '.';

describe('Checkbox', () => {
  it('rendered without error', () => {
    const onChange = vi.fn();
    render(
      <div>
        <Checkbox name="test1" checked onChange={onChange} />
        <Checkbox name="test2" onChange={onChange} />
      </div>
    );
  });
});

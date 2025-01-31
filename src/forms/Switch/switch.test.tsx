import { render } from '@testing-library/react';

import Switch from '.';

describe('Switch', () => {
  it('rendered without error', () => {
    const onChange = vi.fn();
    render(
      <div>
        <Switch name="test" value="1" checked onChange={onChange} />
        <Switch name="test" value="2" onChange={onChange} />
      </div>
    );
  });
});

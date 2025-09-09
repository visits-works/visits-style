import { render } from '@testing-library/react';

import Checkbox from '.';

const checkIcon = <figure />;

describe('Checkbox', () => {
  it('rendered without error', () => {
    const onChange = vi.fn();
    render(
      <div>
        <Checkbox name="test1" checked onChange={onChange} checkIcon={checkIcon} />
        <Checkbox name="test2" onChange={onChange} checkIcon={checkIcon} />
      </div>
    );
  });
});

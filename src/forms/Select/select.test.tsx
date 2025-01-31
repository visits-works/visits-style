import { render } from '@testing-library/react';

import Select from '.';

describe('Select', () => {
  it('rendered without error', () => {
    const onChange = vi.fn();
    render(
      <Select
        name="test"
        value="1"
        placeholder="placeholder"
        onChange={onChange}
        options={[
          { value: '1', label: 'value 1' },
          { value: '2', label: 'value 2' },
        ]}
      />
    );
  });
});

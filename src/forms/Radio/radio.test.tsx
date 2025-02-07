import { fireEvent, render, screen } from '@testing-library/react';

import RadioGroup from './RadioGroup';

describe('Radio', () => {
  it('rendered without error', () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        name="test"
        options={[
          { id: '1', label: 'option1' },
          { id: '2', label: 'option2' },
        ]}
        onChange={onChange}
        value="1"
      />
    );
    expect(screen.getByRole('radio', { name: 'option1' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'option2' })).not.toBeChecked();
  });

  it('click radio call onChange event', () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        name="test"
        options={[
          { id: '1', label: 'option1' },
          { id: '2', label: 'option2' },
        ]}
        onChange={onChange}
        value="1"
      />
    );
    fireEvent.click(screen.getByRole('radio', { name: 'option2' }));
    expect(onChange).toHaveBeenCalledWith('2');
  });
});

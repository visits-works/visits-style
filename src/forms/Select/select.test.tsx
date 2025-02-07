import { render, screen } from '@testing-library/react';
import events from '@testing-library/user-event';

import Select from '.';

describe('Select', () => {
  it('rendered without error', async () => {
    const onChange = vi.fn();
    render(
      <Select
        name="test"
        value={null}
        placeholder="placeholder"
        onChange={onChange}
        options={[
          { value: '1', label: 'value 1' },
          { value: '2', label: 'value 2' },
        ]}
      />
    );
    await events.click(screen.getByRole('button', { name: 'placeholder' }));

    const select = await screen.findByRole('listbox');
    expect(select.childNodes[0]).toHaveTextContent('value 1');
    expect(select.childNodes[1]).toHaveTextContent('value 2');
  });

  it('render with section header', async () => {
    const onChange = vi.fn();
    render(
      <Select
        name="test"
        value="1"
        placeholder="placeholder"
        onChange={onChange}
        options={[
          'header1',
          { value: '1', label: 'value 1' },
          'header2',
          { value: '2', label: 'value 2' },
        ]}
      />
    );
    await events.click(screen.getByRole('button', { name: 'value 1' }));

    const select = await screen.findByRole('listbox');
    expect(select.childNodes[0]).toHaveTextContent('header1');
    expect(select.childNodes[1]).toHaveTextContent('value 1');
    expect(select.childNodes[2]).toHaveTextContent('header2');
    expect(select.childNodes[3]).toHaveTextContent('value 2');
  });
});

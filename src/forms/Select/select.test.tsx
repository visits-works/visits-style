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

    const options = await screen.findAllByRole('option');
    expect(options[0]).toHaveTextContent('value 1');
    expect(options[1]).toHaveTextContent('value 2');
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

    const options = await screen.findAllByRole('option');
    // eslint-disable-next-line testing-library/no-node-access
    expect(options[0].previousElementSibling!).toHaveTextContent('header1');
    expect(options[0]).toHaveTextContent('value 1');
    // eslint-disable-next-line testing-library/no-node-access
    expect(options[1].previousElementSibling!).toHaveTextContent('header2');
    expect(options[1]).toHaveTextContent('value 2');
  });
});

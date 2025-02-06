import { render, screen } from '@testing-library/react';

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
    const select = screen.getByRole('listbox');
    expect(select.childNodes[0]).toHaveTextContent('value 1');
    expect(select.childNodes[1]).toHaveTextContent('value 2');
  });

  it('render with section header', () => {
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
    const select = screen.getByRole('listbox');
    expect(select.childNodes[0]).toHaveTextContent('header1');
    expect(select.childNodes[1]).toHaveTextContent('value 1');
    expect(select.childNodes[2]).toHaveTextContent('header2');
    expect(select.childNodes[3]).toHaveTextContent('value 2');
  });
});

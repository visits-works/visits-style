import { render } from '@testing-library/react';

import { FormField, Checkbox, Radio, Select, Switch, Textarea, Input } from '..';

describe('Form FormField', () => {
  it('field with Checkbox', () => {
    const onChange = vi.fn();
    render(
      <FormField label="test label">
        <Checkbox name="test" checked onChange={onChange} />
      </FormField>
    );
  });

  it('field with Radio', () => {
    const onChange = vi.fn();
    render(
      <FormField label="test label">
        <Radio name="test" value="1" checked onChange={onChange} />
      </FormField>
    );
  });

  it('field with Select', () => {
    const onChange = vi.fn();
    render(
      <FormField label="test label">
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
      </FormField>
    );
  });

  it('field with Switch', () => {
    const onChange = vi.fn();
    render(
      <FormField label="test label">
        <Switch name="test" value="1" checked onChange={onChange} />
      </FormField>
    );
  });

  it('field with Textarea', () => {
    const onChange = vi.fn();
    render(
      <FormField label="test label">
        <Textarea name="test" onChange={onChange} value="test" placeholder="placeholder" />
      </FormField>
    );
  });

  it('field with Input', () => {
    const onChange = vi.fn();
    render(
      <FormField label="test label">
        <Input name="test" onChange={onChange} value="test" placeholder="placeholder" />
      </FormField>
    );
  });
});

import { render } from '@testing-library/react';

import { FormField, Checkbox, Radio, Select, Switch, Textarea, Input } from '..';

describe('Form FormField', () => {
  it('field with Checkbox', () => {
    const onChange = vi.fn();
    render(
      <FormField
        label="test label"
        render={() => <Checkbox name="test" checked onChange={onChange} checkIcon={<figure />} />}
      />
    );
  });

  it('field with Radio', () => {
    const onChange = vi.fn();
    render(
      <FormField
        label="test label"
        render={() => <Radio name="test" value="1" checked onChange={onChange} />}
      />
    );
  });

  it('field with Select', () => {
    const onChange = vi.fn();
    render(
      <FormField
        label="test label"
        render={() => (
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
        )}
      />
    );
  });

  it('field with Switch', () => {
    const onChange = vi.fn();
    render(
      <FormField
        label="test label"
        render={() => <Switch name="test" value="1" checked onChange={onChange} />}
      />
    );
  });

  it('field with Textarea', () => {
    const onChange = vi.fn();
    render(
      <FormField
        label="test label"
        render={() => <Textarea name="test" onChange={onChange} value="test" placeholder="placeholder" />}
      />
    );
  });

  it('field with Input', () => {
    const onChange = vi.fn();
    render(
      <FormField
        label="test label"
        render={() => <Input name="test" onChange={onChange} value="test" placeholder="placeholder" />}
      />
    );
  });
});

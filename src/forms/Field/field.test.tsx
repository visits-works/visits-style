import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';

import { Field, Checkbox, Radio, Select, Switch, Textarea, Input } from '..';

describe('Form Field', () => {
  it('field with Checkbox', () => {
    const onChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Field label="test label">
          <Checkbox name="test" checked onChange={onChange} />
        </Field>
      </ThemeProvider>
    );
  });

  it('field with Radio', () => {
    const onChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Field label="test label">
          <Radio name="test" value="1" checked onChange={onChange} />
        </Field>
      </ThemeProvider>
    );
  });

  it('field with Select', () => {
    const onChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Field label="test label">
          <Select
            name="test"
            value="1"
            placeholder="placeholder"
            onChange={onChange}
            options={[
              { id: '1', name: 'value 1' },
              { id: '2', name: 'value 2' },
            ]}
          />
        </Field>
      </ThemeProvider>
    );
  });

  it('field with Switch', () => {
    const onChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Field label="test label">
          <Switch name="test" value="1" checked onChange={onChange} />
        </Field>
      </ThemeProvider>
    );
  });

  it('field with Textarea', () => {
    const onChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Field label="test label">
          <Textarea name="test" onChange={onChange} value="test" placeholder="placeholder" />
        </Field>
      </ThemeProvider>
    );
  });

  it('field with TextInput', () => {
    const onChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Field label="test label">
          <TextInput name="test" onChange={onChange} value="test" placeholder="placeholder" />
        </Field>
      </ThemeProvider>
    );
  });
});

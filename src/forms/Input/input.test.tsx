import { render, screen } from '@testing-library/react';

import Input, { Props } from '.';

describe('Input', () => {
  it('rendered without error', () => {
    renderInput({});
  });

  it('rendered without error', () => {
    renderInput({});
  });
});

function renderInput(props: Props) {
  render(<Input {...props} />);
}

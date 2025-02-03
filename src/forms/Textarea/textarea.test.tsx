import { render } from '@testing-library/react';

import Textarea, { Props } from '.';

describe('Textarea', () => {
  it('rendered without error', () => {
    renderInput({});
  });
});

function renderInput(props: Props) {
  render(<Textarea {...props} />);
}


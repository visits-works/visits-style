import { render, screen } from '@testing-library/react';

import Spinner from '.';

describe('Spinner', () => {
  it('rendered without error', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});

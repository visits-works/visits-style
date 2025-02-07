import { render, screen } from '@testing-library/react';

import Progress from '.';

describe('Progress', () => {
  it('rendered without error', () => {
    render(<Progress value={10} max={100} />);
  });

  it('progressBar should have 0 length when max/value both zero', () => {
    render(<Progress value={0} max={0} />);
    expect(screen.getByRole('progressbar').firstChild).toHaveStyle({ transform: 'translateX(0%)' });
  });
});

import { render, screen, fireEvent } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('rendered without error', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Hello world</Button>);

    fireEvent.click(screen.getByRole('button', { name: 'Hello world' }));
    expect(onClick).toHaveBeenCalled();
  });
});

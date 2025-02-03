import { render, fireEvent, screen } from '@testing-library/react';

import Tooltip from '.';

describe('Tooltip', () => {
  it('render', () => {
    render(
      <Tooltip label="Tooltip Content">
        <span>show</span>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).toBeNull();

    fireEvent.mouseEnter(screen.getByText('show'));
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip Content');
  });

  it('tooltip does not show on disabled', () => {
    render(
      <Tooltip label="Tooltip Content" disabled>
        <span>show</span>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).toBeNull();

    fireEvent.mouseEnter(screen.getByText('show'));
    expect(screen.queryByRole('tooltip')).toBeNull();
  });
});

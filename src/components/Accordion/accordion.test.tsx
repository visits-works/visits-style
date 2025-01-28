import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Accordion from '.';

describe('Accordion', () => {
  it('rendered without error', () => {
    render(
      <Accordion
        header={<button role="button">click</button>}
        show={false}
      >
        Accordion Content
      </Accordion>
    );
    expect(screen.queryByRole('region')).toBeNull();
    expect(screen.queryByText('Accordion Content')).toHaveAttribute('aria-hidden', 'true');
  });

  it('element shows on show', async () => {
    render(
      <Accordion header={<button role="button">click</button>} show>
        Accordion Content
      </Accordion>
    );
    expect(screen.getByRole('region')).toHaveAttribute('aria-hidden', 'false');
    expect(screen.getByRole('region')).toHaveTextContent('Accordion Content');
  });
});

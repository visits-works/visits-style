import { render, screen } from '@testing-library/react';

import Accordion from '.';

describe('Accordion', () => {
  it('rendered without error', () => {
    render(
      <Accordion
        header={<button>click</button>}
        show={false}
      >
        Accordion Content
      </Accordion>
    );
    expect(screen.queryByRole('group')).toBeNull();
    expect(screen.queryByText('Accordion Content')).toHaveAttribute('aria-hidden', 'true');
  });

  it('element shows on show', async () => {
    render(
      <Accordion header={<button>click</button>} show>
        Accordion Content
      </Accordion>
    );
    expect(screen.getByRole('group')).toHaveAttribute('aria-hidden', 'false');
    expect(screen.getByRole('group')).toHaveTextContent('Accordion Content');
  });
});

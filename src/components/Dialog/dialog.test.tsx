import { render, screen, waitFor } from '@testing-library/react';
import event from '@testing-library/user-event';

import Modal, { Props } from '.';

describe('Dialog', () => {
  it('render dialog', () => {
    renderDialog({ onOpenChange: vi.fn(), open: true });

    expect(screen.getByRole('dialog')).toHaveTextContent('Dialog Content here');
  });

  it('dialog does not rendered when show props is false', () => {
    renderDialog({ onOpenChange: vi.fn(), open: false });

    // content does not exists
    expect(screen.queryByText('Dialog Content here')).toBeNull();
    // role=dialog div does not exists
    expect(screen.queryByRole('dialog')).toBeNull();
    // overlay does not exists
    expect(screen.queryByTestId('vs-dialog-overlay')).toBeNull();
  });

  it('onOpenChange is called by clicking overlay when "closeOnOverlay" is enabled', async () => {
    const onClose = vi.fn();
    renderDialog({ onOpenChange: onClose, open: true, closeOnOverlay: true });

    await event.click(screen.getByTestId('vs-dialog-overlay'));
    expect(onClose).toBeCalled();
  });

  it('onOpenChange is not called by clicking overlay when "closeOnOverlay" is disabled', async () => {
    const onClose = vi.fn();
    renderDialog({ onOpenChange: onClose, open: true });

    await event.click(screen.getByTestId('vs-dialog-overlay'));
    expect(onClose).not.toBeCalled();
  });

  it('onOpenChange is called on pressing Escape Key when "closeOnEsc is enabled', async () => {
    const onClose = vi.fn();
    renderDialog({ onOpenChange: onClose, open: true, closeOnEsc: true });

    await event.keyboard('[Escape]');
    expect(onClose).toBeCalled();
  });

  it('onOpenChange is called on pressing Escape Key when "closeOnEsc is disabled', async () => {
    const onClose = vi.fn();
    renderDialog({ onOpenChange: onClose, open: true, closeOnEsc: false });

    await event.keyboard('[Escape]');
    expect(onClose).not.toBeCalled();
  });
});

function renderDialog(props: Props) {
  render(<Modal timeout={0} {...props}><p>Dialog Content here</p></Modal>);
}

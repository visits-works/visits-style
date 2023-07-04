import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, screen } from '@testing-library/react';
import theme from '../../theme';

import Modal, { Props } from '.';
import Box from '../../elements/Box';

describe('Modal', () => {
  it('render modal', () => {
    renderModal({ closeModal: vi.fn(), show: true });

    screen.getByText('Modal Content here');
  });

  it('modal does not rendered when show props is false', () => {
    renderModal({ closeModal: vi.fn(), show: false });

    // content does not exists
    expect(screen.queryByText('Modal Content here')).toBeNull();
    // role=dialog div does not exists
    expect(screen.queryByRole('dialog')).toBeNull();
    // overlay does not exists
    expect(screen.queryByTestId('vs-modal-overlay')).toBeNull();
  });

  it('closeModal is called by clicking overlay when "closeOnOverlay" is enabled', () => {
    const onClose = vi.fn();
    renderModal({ closeModal: onClose, show: true, closeOnOverlay: true });

    fireEvent.click(screen.getByTestId('vs-modal-overlay'));
    expect(onClose).toBeCalled();
  });

  it('closeModal is not called by clicking overlay when "closeOnOverlay" is disabled', () => {
    const onClose = vi.fn();
    renderModal({ closeModal: onClose, show: true });

    fireEvent.click(screen.getByTestId('vs-modal-overlay'));
    expect(onClose).not.toBeCalled();
  });

  it('closeModal is called on pressing Escape Key when "closeOnEsc is enabled', () => {
    const onClose = vi.fn();
    renderModal({ closeModal: onClose, show: true, closeOnEsc: true });

    fireEvent.keyDown(screen.getByRole('dialog'), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27
    });
    expect(onClose).toBeCalled();
  });

  it('closeModal is called on pressing Escape Key when "closeOnEsc is disabled', () => {
    const onClose = vi.fn();
    renderModal({ closeModal: onClose, show: true, closeOnEsc: false });

    fireEvent.keyDown(screen.getByRole('dialog'), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27
    });
    expect(onClose).not.toBeCalled();
  });
});

function renderModal(props: Props) {
  render(
    <ThemeProvider theme={theme}>
      <Modal {...props}>
        <Box>Modal Content here</Box>
      </Modal>
    </ThemeProvider>,
  );
}

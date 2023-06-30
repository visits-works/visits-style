import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, screen } from '@testing-library/react';
import theme from '../../theme';

import Modal from '.';

describe('Modal', () => {
  it('render modal', () => {
    const onClose = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Modal
          closeModal={onClose}
          show
        >
          Modal Content here
        </Modal>
      </ThemeProvider>,
    );
    screen.getByText('Modal Content here');
  });

  it('modal does not rendered when show props is false', () => {
    const onClose = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Modal
          closeModal={onClose}
          show={false}
        >
          Modal Content here
        </Modal>
      </ThemeProvider>,
    );

    // content does not exists
    expect(screen.queryByText('Modal Content here')).toBeNull();
    // wrapper div does not exists
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('closeModal is called by clicking overlay when "closeOnOverlay" is enabled', () => {
    const onClose = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Modal
          closeModal={onClose}
          show
          closeOnOverlay
        >
          Modal Content here
        </Modal>
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByTestId('vs-modal-overlay'));
    expect(onClose).toBeCalled();
  });

  it('closeModal is not called by clicking overlay when "closeOnOverlay" is disabled', () => {
    const onClose = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Modal
          closeModal={onClose}
          show
        >
          Modal Content here
        </Modal>
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByTestId('vs-modal-overlay'));
    expect(onClose).not.toBeCalled();
  });

  it('closeModal is called on pressing Escape Key when "closeOnEsc is enabled', () => {
    const onClose = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Modal
          closeModal={onClose}
          show
        >
          Modal Content here
        </Modal>
      </ThemeProvider>,
    );

    fireEvent.keyDown(screen.getByRole('document'), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27
    });
    expect(onClose).toBeCalled();
  });

  it('external rendered outside of modal document', () => {
    const onClose = vi.fn();
    const { getByTestId, getByRole } = render(
      <ThemeProvider theme={theme}>
        <Modal
          closeModal={onClose}
          external={<div data-testid="modal-external">external contents</div>}
          show
        >
          Modal Content here
        </Modal>
      </ThemeProvider>,
    );
    expect(screen.getByRole('document').contains(screen.getByTestId('modal-external'))).toBeFalsy();
    expect(screen.getByRole('dialog').contains(screen.getByTestId('modal-external'))).toBeTruthy();
  })
});

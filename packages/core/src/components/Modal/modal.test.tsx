import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import theme from '../../theme';

import Modal from '.';

describe('Modal', () => {
  it('render modal', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Modal
          closeModal={onClose}
          show
        >
          Modal Content here
        </Modal>
      </ThemeProvider>,
    );
    getByText('Modal Content here');
  });

  it('modal does not rendered when show props is false', () => {
    const onClose = jest.fn();
    const { queryByText, queryByRole } = render(
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
    expect(queryByText('Modal Content here')).toBeNull();
    // wrapper div does not exists
    expect(queryByRole('dialog')).toBeNull();
  });

  it('closeModal is called by clicking overlay when "closeOnOverlay" is enabled', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
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
    fireEvent.click(getByTestId('vs-modal-overlay'));
    expect(onClose).toBeCalled();
  });

  it('closeModal is not called by clicking overlay when "closeOnOverlay" is disabled', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Modal
          closeModal={onClose}
          show
        >
          Modal Content here
        </Modal>
      </ThemeProvider>,
    );
    fireEvent.click(getByTestId('vs-modal-overlay'));
    expect(onClose).not.toBeCalled();
  });

  it('external rendered outside of modal document', () => {
    const onClose = jest.fn();
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
    expect(getByRole('document').contains(getByTestId('modal-external'))).toBeFalsy();
    expect(getByRole('dialog').contains(getByTestId('modal-external'))).toBeTruthy();
  })
});

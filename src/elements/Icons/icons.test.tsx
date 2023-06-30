import React from 'react';
import { render } from '@testing-library/react';

import * as Icons from '.';

describe('Icons', () => {
  it('IconApproved', () => {
    render(<Icons.IconApproved />);
  });

  it('IconArrowDown', () => {
    render(<Icons.IconArrowDown />);
  });

  it('IconChevronLeftRound', () => {
    render(<Icons.IconChevronLeftRound />);
  });

  it('IconChevronRightRound', () => {
    render(<Icons.IconChevronRightRound />);
  });

  it('IconClose', () => {
    render(<Icons.IconClose />);
  });

  it('IconFileRound', () => {
    render(<Icons.IconFileRound />);
  });

  it('IconPencil', () => {
    render(<Icons.IconPencil />);
  });

  it('IconPencilSimple', () => {
    render(<Icons.IconPencilSimple />);
  });

  it('IconPlus', () => {
    render(<Icons.IconPlus />);
  });

  it('IconRefresh', () => {
    render(<Icons.IconRefresh />);
  });

  it('IconUser', () => {
    render(<Icons.IconUser />);
  });
});

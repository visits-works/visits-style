import { render } from '@testing-library/react';

import * as Icons from '.';

describe('Icons', () => {
  it('IconAlert', () => {
    render(<Icons.IconAlert />);
  });

  it('IconApproved', () => {
    render(<Icons.IconApproved />);
  });

  it('IconArrowDown', () => {
    render(<Icons.IconArrowDown />);
  });

  it('IconChevronRound', () => {
    render(<Icons.IconChevronRound />);
  });

  it('IconCaution', () => {
    render(<Icons.IconCaution />);
  });

  it('IconCheck', () => {
    render(<Icons.IconCheck />);
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

import React from 'react';
import styled from 'styled-components';

export const SideMenu = styled.aside`
  font-size: 1rem;
`;
SideMenu.displayName = 'SideMenu';

export const MenuList = styled.ul`
  line-height: 1.25;

  a {
    display: block;
    padding: 0.5em;
    border-radius: 4px;
    color: ${({ theme }) => theme.text};
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
    &.active {
      color: ${({ theme }) => theme.primary};
    }
  }

  li {
    ul {
      margin: 0.75em;
      padding-left: 0.75em;
    }
  }
`;
MenuList.displayName = 'MenuList';

export const MenuLabel = styled.p`
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:not(:first-child) {
    margin-top: 1em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;
MenuLabel.displayName = 'MenuLabel';


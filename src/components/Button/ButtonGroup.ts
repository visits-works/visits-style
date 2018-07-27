import React from 'react';
import styled, { StyledComponentClass, ThemeType } from '../../styled';
import Button from '.';

const ButtonGroup = styled.div`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  ${Button} {
    margin: 0;
    border-radius: 0;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;

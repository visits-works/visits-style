import { styled } from 'styled-components';
import Button from '.';

export default styled.div`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  ${Button} {
    margin: 0;
    border-radius: 0;

    &:hover {
      z-index: 1;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;

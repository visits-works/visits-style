import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

const Pre = styled.pre`
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  padding: 1.25em 1.5em;
  white-space: pre;
  word-wrap: normal;

  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;
Pre.displayName = 'Pre';

export default Pre;

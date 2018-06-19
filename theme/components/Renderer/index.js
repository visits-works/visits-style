// @flow
import React, { Fragment } from 'react';
// import Iframe from './iframe';
import styled from 'styled-components';

const Temp = styled.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: transparent;
`;

const Wrapper = styled.div`
  box-shadow: 0 0 0 2px ${({ theme }) => theme.borderHover};
  border-radius: 4px;
`;

export default ({ component, code }) => (
  <Wrapper>
    <Temp>
      {component}
    </Temp>
    {code}
  </Wrapper>
)

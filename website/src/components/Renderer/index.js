import React, { Fragment } from 'react';
// import Iframe from './iframe';
import styled from 'styled-components';

const Temp = styled.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  border-bottom: 0;
  border-radius: 5px 5px 0 0;
`;

export default ({ component, code }) => (
  <Fragment>
    <Temp>
      {component}
    </Temp>
    {code}
  </Fragment>
)

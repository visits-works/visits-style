import React, { Fragment } from 'react';
import styled from 'styled-components';

const Temp = styled.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.border};
  border-bottom: none;
`;

export default function Renderer({ component, code }) {
  return (
    <Fragment>
      <Temp>
        {component}
      </Temp>
      {code}
    </Fragment>
  );
}

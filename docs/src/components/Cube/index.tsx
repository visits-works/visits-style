import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  background-color: ${({ color }) => color};

  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  border-radius: 4px;
`;

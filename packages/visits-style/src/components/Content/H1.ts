import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.5em;
  padding-left: 1rem;

  border-left: 1rem solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.border};
`;
H1.displayName = 'H1';

export default H1;

import styled from 'styled-components';

export default styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.border};
`;

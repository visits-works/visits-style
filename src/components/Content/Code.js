// @flow
import styled from 'styled-components';

const Code = styled.code`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.danger};
  font-size: .875em;
  font-weight: 400;
  padding: .25em .5em .25em;
`;

Code.displayName = 'Code';

export default Code;

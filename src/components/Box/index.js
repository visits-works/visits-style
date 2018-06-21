// @flow
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.border};
  width: 100%;

  min-width: 0;
  word-wrap: break-word;
`;
Box.displayName = 'Box';


export default Box;

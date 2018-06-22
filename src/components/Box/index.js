// @flow
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  width: 100%;

  min-width: 0;
  word-wrap: break-word;
`;
Box.displayName = 'Box';


export default Box;

import styled, { css } from '../../styled';
function getColor({ theme, color }) {
    const value = (!color || color === 'light') ? theme.background : theme[color];
    return css `
    border-color: ${value};
    border-right-color: ${theme.border};
    border-top-color: ${theme.border};
  `;
}
const Spinner = styled.div `
  display: inline-block;
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : '100%'};
  margin: 0;
  padding: 0;
  position: relative;

  &:after {
    display: block;
    top: 0;
    left: 0;
    animation: spin 750ms infinite linear;
    border: ${({ borderSize }) => borderSize} solid;
    border-radius: 100%;
    ${getColor}
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
    borderSize: '2px',
};
export default Spinner;

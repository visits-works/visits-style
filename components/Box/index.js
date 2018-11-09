import styled from '../../styled';
import findColorInvert from '../../utils/findColorInvert';
const Box = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ borderless, theme }) => borderless ? `` : `border: 1px solid ${theme.border};`}
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  width: 100%;

  min-width: 0;
  word-wrap: break-word;

  ${({ color, theme }) => {
    if (!color)
        return '';
    const target = theme[color] || color;
    const invertColor = findColorInvert(theme, target);
    return `background-color: ${target}; color: ${invertColor};`;
}}
`;
Box.displayName = 'Box';
export default Box;

import React from 'react';
import styled from '../../styled';
import findColorInvert from '../../utils/findColorInvert';
const Box = styled.div.withConfig({
  displayName: "Box",
  componentId: "v21x8u-0"
})(["position:relative;display:flex;flex-direction:column;", " box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);border-radius:3px;width:100%;min-width:0;word-wrap:break-word;", ""], ({
  borderless,
  theme
}) => borderless ? `` : `border: 1px solid ${theme.border};`, ({
  color,
  theme
}) => {
  if (!color) return '';
  const target = color === 'light' ? theme.color.greyLight : theme[color];
  const invertColor = findColorInvert(target);
  return `background-color: ${target}; color: ${invertColor};`;
});
Box.displayName = 'Box';
export default function (props) {
  return React.createElement(Box, props);
}
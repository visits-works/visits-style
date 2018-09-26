import styled from '../../styled';
const Code = styled.code.withConfig({
  displayName: "Code",
  componentId: "sl7eyv-0"
})(["background-color:", ";color:", ";font-size:.875em;font-weight:400;padding:.25em .5em .25em;"], ({
  theme
}) => theme.background, ({
  theme
}) => theme.danger);
Code.displayName = 'Code';
export default Code;
import styled from '../../styled';
import setSize from '../../utils/setSize';
const Progress = styled.progress.withConfig({
  displayName: "Progress",
  componentId: "sc-1toznj0-0"
})(["-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;overflow:hidden;padding:0;width:100%;color:", ";", " ", " will-change:width;transition-property:width;transition-duration:350ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&::-webkit-progress-bar{background-color:", ";}&::-webkit-progress-value{background-color:", ";}&::-moz-progress-bar{background-color:", ";}&::-ms-fill{border:0;background-color:", ";}"], ({
  theme
}) => theme.background, ({
  size
}) => setSize('height', size), ({
  size,
  height
}) => !size && height ? `height: ${height};` : '', ({
  theme
}) => theme.background, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.primary);
Progress.displayName = 'Progress';
export default Progress;
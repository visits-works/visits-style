import styled, { css } from '../../styled';
import Col from './Col';
import { fullhd, tablet } from '../../styles/variables';

function renderGutter({
  noGutter
}) {
  if (noGutter) {
    return css(["margin-right:0;margin-left:0;> ", "{padding-right:0;padding-left:0;}"], Col);
  } else {
    return css(["@media (min-width:", "px){margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem;&:last-child{margin-bottom:-0.75rem;}&:not(:last-child){margin-bottom:0.75rem;}}@media (min-width:", "px){margin-left:-0.5rem;margin-right:-0.5rem;margin-top:-0.5rem;&:last-child{margin-bottom:-0.5rem;}&:not(:last-child){margin-bottom:0.5rem;}}"], fullhd, tablet);
  }
}

const Row = styled.div.withConfig({
  displayName: "Row",
  componentId: "sc-1syuetm-0"
})(["display:flex;max-width:100%;flex-wrap:wrap;", " ", " ", ""], ({
  vcenter
}) => vcenter ? 'align-items: center;' : '', ({
  center
}) => center ? 'justify-content: center;' : '', renderGutter);
Row.displayName = 'Row'; // Row.defaultProps = {
//   width: null,
//   multiline: false,
//   vcenter: false,
//   noGutter: false,
// };

export default Row;
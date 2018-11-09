import styled, { css } from '../../styled';
import Col from './Col';
import { mediaFullHD, mediaTablet } from '../../utils/media';
function renderGutter({ noGutter }) {
    if (noGutter) {
        return css `
      margin-right: 0;
      margin-left: 0;

      > ${Col} {
        padding-right: 0;
        padding-left: 0;
      }
    `;
    }
    else {
        return css `
      ${mediaTablet `
        margin-left: -0.5rem;
        margin-right: -0.5rem;
        margin-top: -0.5rem;

        &:last-child {
          margin-bottom: -0.5rem;
        }

        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      `}

      ${mediaFullHD `
          margin-left: -0.75rem;
          margin-right: -0.75rem;
          margin-top: -0.75rem;

          &:last-child {
            margin-bottom: -0.75rem;
          }

          &:not(:last-child) {
            margin-bottom: 0.75rem;
          }
      `}
    `;
    }
}
const Row = styled.div `
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;

  ${({ vcenter }) => vcenter ? 'align-items: center;' : ''}
  ${({ center }) => center ? 'justify-content: center;' : ''}

  ${renderGutter}
`;
Row.displayName = 'Row';
// Row.defaultProps = {
//   width: null,
//   multiline: false,
//   vcenter: false,
//   noGutter: false,
// };
export default Row;

"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importStar(require("../../styled"));
const stripedStyle = styled_1.css `
  tbody > tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;
const hoverStyle = styled_1.css `
  tbody > tr:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
const Table = styled_1.default.table `
  display: block;
  ${({ full }) => full ? 'width: 100%;' : ''}
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  td, th {
    vertical-align: top;
    padding: 0.75rem;
    ${({ theme, bordered }) => bordered ? `
      border: 1px solid ${theme.border};
    ` : `
      border: 1px solid ${theme.border};
    `}
    border-width: 0 0 1px;
  }

  th { white-space: nowrap; }

  ${({ striped }) => striped ? stripedStyle : ''}
  ${({ hover }) => hover ? hoverStyle : ''}

  ${({ headerStyle }) => headerStyle ? styled_1.css `
    th {
      ${headerStyle}
    }
  ` : ''}
`;
exports.default = Table;

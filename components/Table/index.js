import styled, { css } from '../../styled';
const stripedStyle = css(["tbody > tr:nth-child(odd){background-color:rgba(0,0,0,0.02);}"]);
const hoverStyle = css(["tbody > tr:hover{background-color:rgba(0,0,0,0.04);}"]);
const Table = styled.table.withConfig({
  displayName: "Table",
  componentId: "sc-2hrn8c-0"
})(["display:block;", " max-width:100%;margin-bottom:1rem;background-color:transparent;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;td,th{vertical-align:top;padding:0.75rem;", " border-width:0 0 1px;}th{white-space:nowrap;}", " ", " ", ""], ({
  full
}) => full ? 'width: 100%;' : '', ({
  theme,
  bordered
}) => bordered ? `
      border: 1px solid ${theme.border};
    ` : `
      border: 1px solid ${theme.border};
    `, ({
  striped
}) => striped ? stripedStyle : '', ({
  hover
}) => hover ? hoverStyle : '', ({
  headerStyle
}) => headerStyle ? css(["th{", "}"], headerStyle) : '');
export default Table;
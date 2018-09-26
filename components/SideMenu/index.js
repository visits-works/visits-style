import styled from '../../styled';
export const SideMenu = styled.aside.withConfig({
  displayName: "SideMenu",
  componentId: "sc-1bcney9-0"
})(["font-size:1rem;"]);
SideMenu.displayName = 'SideMenu';
export const MenuList = styled.ul.withConfig({
  displayName: "SideMenu__MenuList",
  componentId: "sc-1bcney9-1"
})(["line-height:1.25;a{display:block;padding:0.5em 0.75em;border-radius:4px;color:", ";&:hover{background-color:", ";}&.active{background-color:", ";color:white;}}li{ul{border-left:1px solid ", ";margin:0.75em;padding-left:0.75em;}}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.background, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.border);
MenuList.displayName = 'MenuList';
export const MenuLabel = styled.p.withConfig({
  displayName: "SideMenu__MenuLabel",
  componentId: "sc-1bcney9-2"
})(["font-size:0.75em;letter-spacing:0.1em;text-transform:uppercase;&:not(:first-child){margin-top:1em;}&:not(:last-child){margin-bottom:1em;}"]);
MenuLabel.displayName = 'MenuLabel';
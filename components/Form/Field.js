import React, { PureComponent } from 'react';
import styled from '../../styled';
const Wrapper = styled.div.withConfig({
  displayName: "Field__Wrapper",
  componentId: "sc-1vvmhhp-0"
})(["display:block;&:not(:last-child){margin-bottom:0.75rem;}"]);
const Label = styled.label.withConfig({
  displayName: "Field__Label",
  componentId: "sc-1vvmhhp-1"
})(["color:", ";display:block;font-size:1rem;font-weight:700;margin-bottom:0.325rem;"], ({
  theme
}) => theme.textStrong);
export default class Field extends PureComponent {
  render() {
    const {
      label,
      children,
      style
    } = this.props;
    return React.createElement(Wrapper, {
      style: style
    }, label && React.createElement(Label, null, label), children);
  }

}
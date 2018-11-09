import React, { PureComponent } from 'react';
import styled from '../../styled';
const Wrapper = styled.label `
  display: inline-block;
  cursor: pointer;
  line-height: 1.25;
  position: relative;

  input {
    cursor: pointer;
    margin-right: 0.5em;
  }

  input+label {

  }

  &:not(:first-child) {
    margin-left: 0.5em;
  }
`;
export default class Switch extends PureComponent {
    constructor() {
        super(...arguments);
        this.id = `switch_${this.props.name}`;
    }
    render() {
        const { children, ...rest } = this.props;
        return (React.createElement(Wrapper, null,
            React.createElement("input", Object.assign({ id: this.id, type: "checkbox" }, rest)),
            React.createElement("label", { htmlFor: this.id }, children)));
    }
}
Switch.defaultProps = {
    children: null,
    onChange: () => { },
};

import React, { PureComponent } from 'react';
import styled from '../../styled';
const Wrapper = styled.div `
  display: block;
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;
const Label = styled.label `
  color: ${({ theme }) => theme.textStrong};
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.325rem;
`;
export default class Field extends PureComponent {
    render() {
        const { label, children, style } = this.props;
        return (React.createElement(Wrapper, { style: style },
            label && (React.createElement(Label, null, label)),
            children));
    }
}

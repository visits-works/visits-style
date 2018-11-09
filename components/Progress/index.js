import React, { PureComponent } from 'react';
import styled from '../../styled';
import setSize from '../../utils/setSize';
const Wrapper = styled.div `
  display: block;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};

  ${({ size }) => setSize('height', size)}
  ${({ size, height }) => !size && height ? `height: ${height};` : ''}

  & > div {
    height: 100%;
    border-radius: 4px;
    ${({ value, max }) => (value === max) ? '' : 'border-bottom-right-radius: 0; border-top-right-radius: 0;'}
    background-color: ${({ color, theme }) => (theme[color] || color)};

    will-change: width;

    transition-property: width;
    transition-duration: 350ms;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
export default class Progress extends PureComponent {
    render() {
        const { value, max } = this.props;
        const percent = Math.round((value / max) * 100);
        return (React.createElement(Wrapper, Object.assign({}, this.props),
            React.createElement("div", { role: "progressbar", style: { width: `${percent > 100 ? 100 : percent}%` } })));
    }
}
Progress.defaultProps = {
    color: 'primary',
};
;

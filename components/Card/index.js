import React, { PureComponent } from 'react';
import styled from '../../styled';
import Box from '../Box';
const CardBody = styled.div `
  padding: 1.25rem;
  margin: 0;
`;
const CardHeader = styled.header `
  display: flex;
  padding: 0.5rem 1.5rem;
  min-height: 3.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  justify-content: space-between;
`;
const CardFooter = styled.footer `
  display: flex;
  padding: 0.5rem 1.5rem;
  min-height: 3.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  justify-content: space-between;
`;
const CardImage = styled.a `
  width: 100%;

  img {
    width: 100%;
    padding: 0;
    margin: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
`;
const CardImageHorizontal = styled.a `
  flex: 0 0 30%;
  min-width: 5rem;
  width: 30%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  background: no-repeat center/cover;
  ${({ url }) => url ? `background-image: url(${url});` : ''}
`;
const horizontalStyle = { flexDirection: 'row' };
export default class Card extends PureComponent {
    constructor() {
        super(...arguments);
        this.renderHeader = () => {
            const { image, title, horizontal } = this.props;
            if (image && !horizontal)
                return (React.createElement(CardImage, null,
                    React.createElement("img", { src: image })));
            if (image && horizontal)
                return (React.createElement(CardImageHorizontal, { url: image }));
            if (title && !horizontal)
                return (React.createElement(CardHeader, null,
                    React.createElement("h3", null, title)));
            return null;
        };
    }
    render() {
        const { children, horizontal, footer, color } = this.props;
        const header = this.renderHeader();
        const wrapperStyle = horizontal ? horizontalStyle : undefined;
        return (React.createElement(Box, { style: wrapperStyle, color: color },
            header,
            React.createElement(CardBody, null, children),
            footer && (React.createElement(CardFooter, null, React.Children.only(footer)))));
    }
}

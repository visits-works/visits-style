import React, { PureComponent, ReactNode, CSSProperties } from 'react';
import styled from '../../styled';
import Box from '../Box';
import { ColorType } from '../../types';

const CardBody = styled.div`
  padding: 1.25rem;
  margin: 0;
`;

const CardHeader = styled.header`
  display: flex;
  padding: 0.5rem 1.5rem;
  min-height: 3.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  justify-content: space-between;
`;

const CardFooter = styled.footer`
  display: flex;
  padding: 0.5rem 1.5rem;
  min-height: 3.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  justify-content: space-between;
`;

const CardImage = styled.a`
  width: 100%;

  img {
    width: 100%;
    padding: 0;
    margin: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
`;

interface ImageProps {
  url?: string;
}

const CardImageHorizontal = styled.a<ImageProps>`
  flex: 0 0 30%;
  min-width: 5rem;
  width: 30%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  background: no-repeat center/cover;
  ${({ url }) => url ? `background-image: url(${url});` : ''}
`;

interface Props {
  /** レスポンシブなイメージを追加する */
  image?: string;
  /** タイトル */
  title?: string;
  /** ヘッダーの右側に追加する */
  headerOptions?: ReactNode;
  /** header部分（イメージ）を横並びにする */
  horizontal?: boolean;
  /** footer */
  footer?: ReactNode;
  /** 色の指定 */
  color?: ColorType;
  /** カスタinline style */
  style?: any;
}

const horizontalStyle: CSSProperties = { flexDirection: 'row' };

export default class Card extends PureComponent<Props> {
  renderHeader = () => {
    const { image, title, horizontal } = this.props;

    if (image && !horizontal) return (<CardImage><img src={image} /></CardImage>);
    if (image && horizontal) return (<CardImageHorizontal url={image} />);
    if (title && !horizontal) return (<CardHeader><h3>{title}</h3></CardHeader>);

    return null;
  }

  render() {
    const { children, horizontal, footer, color } = this.props;

    const header = this.renderHeader();
    const wrapperStyle = horizontal ? horizontalStyle : undefined;
    return (
      <Box style={wrapperStyle} color={color}>
        {header}
        <CardBody>
          {children}
        </CardBody>
        {footer && (<CardFooter>{React.Children.only(footer)}</CardFooter>)}
      </Box>
    );
  }
}

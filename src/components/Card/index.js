import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Box from '../Box';

export const CardBody = styled.div`
  padding: 1.25rem;
  margin: 0;
`;

export const CardHeader = styled.header`
  display: flex;
  padding: 0.5rem 1.5rem;
  min-height: 3.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  justify-content: space-between;
`;

export const CardImage = styled.a`
  width: 100%;

  img {
    width: 100%;
    padding: 0;
    margin: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
`;

export const CardImageHorizontal = styled.a`
  flex: 0 0 30%;
  min-width: 5rem;
  width: 30%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  background: no-repeat center/cover;
  ${({ url }) => url ? `background-image: url(${url});` : ''}
`;

type Props = {
  /** レスポンシブなイメージを追加する */
  image?: string,
  /** タイトル */
  title?: string,
  /** ヘッダーの右側に追加する */
  headerOptions?: Node,
  /** header部分（イメージ）を横並びにする */
  horizontal?: boolean,
}

export default class Card extends PureComponent<Props> {
  renderHeader = () => {
    const { image, title, horizontal } = this.props;

    if (image && !horizontal) return (<CardImage><img src={image} /></CardImage>);
    if (image && horizontal) return (<CardImageHorizontal url={image} />);
    if (title && !horizontal) return (<CardHeader><h3>{title}</h3></CardHeader>);

    return null;
  }

  render() {
    const { children, image, horizontal } = this.props;

    const header = this.renderHeader();
    const wrapperStyle = horizontal ? { flexDirection: 'row' } : null;
    return (
      <Box style={wrapperStyle}>
        {header}
        <CardBody>
          {children}
        </CardBody>
      </Box>
    );
  }
}

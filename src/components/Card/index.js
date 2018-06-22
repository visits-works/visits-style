import React, { PureComponent } from 'react';
import styled from 'styled-components';
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

type Props = {
  /** レスポンシブなイメージを追加する */
  image?: string,
  /** imageが定義されていると、無視される */
  title?: string,
  /** header部分（イメージ）を横並びにする */
  horizontal?: boolean,
}

export default class Card extends PureComponent<Props> {
  renderHeader = () => {
    const { image, title, horizontal } = this.props;

    if (image) return null;
    if (title) return (<CardHeader><h3>{title}</h3></CardHeader>);

    return null;
  }

  render() {
    const { children, image } = this.props;

    const header = this.renderHeader();
    return (
      <Box>
        {header}
        <CardBody>
          {children}
        </CardBody>
      </Box>
    );
  }
}

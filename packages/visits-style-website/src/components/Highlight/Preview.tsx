import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withLive } from 'react-live';

// @ts-ignore
import { ButtonGroup, Button, mediaMobile } from 'visits-style';

// const compileES5 = (
//   code,
// ) => Babel.transform(code, {presets: ['es2015', 'react']}).code;

// // eslint-disable-next-line no-undef
// const compileES6 = code => Babel.transform(code, {presets: ['react']}).code;

interface State {
  width: string;
}

const PreviewWrapper = styled.div`
  min-height: 3.25rem;
  background: white;
`;

const Playground = styled.div<State>`
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  min-width: ${({ width }) => width};
  padding: 0.75rem;
  border: 1px solid #1e1e1e;
  margin: 0 auto;
`;

const Menu = styled(ButtonGroup)`
  text-align: right;
  width: 100%;

  ${mediaMobile} {
    display: none;
  }
`;


class Preview extends PureComponent<any, State> {
  state = { width: '100%' };

  setResponsive = () => {
    this.setState({ width: '100%' });
  }

  setIphoneSize = () => {
    this.setState({ width: '375px' });
  }

  setIpadSize = () => {
    this.setState({ width: '768px' });
  }

  render() {
    const { element: Element } = this.props.live;
    const { width } = this.state;
    return (
      <PreviewWrapper>
        <Menu>
          <Button
            onClick={this.setResponsive}
            color="info"
            outline={width !== '100%'}
          >
            a
          </Button>
          <Button
            onClick={this.setIpadSize}
            color="info"
            outline={width !== '768px'}
          >
            b
          </Button>
          <Button
            onClick={this.setIphoneSize}
            color="info"
            outline={width !== '375px'}
          >
            c
          </Button>
        </Menu>
        <Playground width={width}>
          {Element ? <Element /> : null}
        </Playground>
      </PreviewWrapper>
    );
  }
}

export default withLive(Preview);

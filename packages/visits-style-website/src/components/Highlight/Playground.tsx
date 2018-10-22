import React, { Component } from 'react';
import styled from 'styled-components';
import { LiveProvider, withLive, LiveError, LivePreview } from "react-live";
import { IoIosPhonePortrait, IoMdDesktop, IoMdTabletPortrait } from 'react-icons/io';
import { FiInfo, FiThumbsUp } from 'react-icons/fi';

import { mediaMobile } from '@utils/media';

import Editor from './Highlight';

import Logo from '../Logo';
// @ts-ignore
import ImgUrl from '../../../assets/sample.png';

// @ts-ignore
import * as all from '@components';

interface Props {
  children: string;
}

interface State {
  width: string;
}

const LiveWrapper = styled.div<State>`
  max-width: 100%;
  padding: 0;
  margin-top: 0.75rem;
  border-radius: 3px;

  .react-live-preview {
    padding: 0.75rem;
    background: white;
    margin: 0 auto;
    width: ${({ width }) => width};
    max-width: ${({ width }) => width};
    min-width: ${({ width }) => width};
    border: 1px solid #1e1e1e;
  }

  .react-live-error {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0.5rem;
    z-index: 9999;
    background: ${({ theme }) => theme.danger};
    color: ${({ theme }) => theme.white};
    border-radius: 4px;
    white-space: pre-wrap;
  }
`;

function LiveEditor({ live }: any) {
  return (
    <Editor
      className="language-jsx"
      onChange={live.onChange}
    >
      {live.code}
    </Editor>
  );
}

const TextEditor = withLive(LiveEditor);

const Menu = styled(all.ButtonGroup)`
  text-align: right;
  width: 100%;

  ${mediaMobile`display: none;`}
`;

export default class Playground extends Component<Props> {
  state = { width: '100%' };

  shouldComponentUpdate(_: Props, state: State) {
    return this.state.width !== state.width;
  }

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
    const { children } = this.props;
    const { width } = this.state;
    const { Button } = all;
    return (
      <LiveWrapper width={width}>
        <Menu>
          <Button
            onClick={this.setResponsive}
            color="info"
            outline={width !== '100%'}
          >
            <IoMdDesktop />
          </Button>
          <Button
            onClick={this.setIpadSize}
            color="info"
            outline={width !== '768px'}
          >
            <IoMdTabletPortrait />
          </Button>
          <Button
            onClick={this.setIphoneSize}
            color="info"
            outline={width !== '375px'}
          >
            <IoIosPhonePortrait />
          </Button>
        </Menu>
        <LiveProvider code={children} scope={{...all, Logo, ImgUrl, FiInfo, FiThumbsUp}} mountStylesheet={false}>
          <LivePreview />
          <LiveError />
          <TextEditor />
        </LiveProvider>
      </LiveWrapper>
    );
  }
}

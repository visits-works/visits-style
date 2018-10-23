import React, { Component } from 'react';
import styled from 'styled-components';
import { LiveProvider, withLive, LiveError } from "react-live";
import { FiInfo, FiThumbsUp } from 'react-icons/fi';

import { mediaMobile } from '@utils/media';

import Editor from './Highlight';
import Preview from './Preview';

import Logo from '../Logo';
// @ts-ignore
import ImgUrl from '../../../assets/sample.png';

// @ts-ignore
import * as all from '@components';

interface Props {
  children: string;
}


const LiveWrapper = styled.div`
  max-width: 100%;
  padding: 0;
  margin-top: 0.75rem;
  border-radius: 3px;
  position: relative;

  .react-live-error {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 5rem;
    max-width: 100%;
    overflow: scroll;
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
    <Editor onChange={live.onChange}>
      {live.code}
    </Editor>
  );
}

const TextEditor = withLive(LiveEditor);

export default class Playground extends Component<Props> {
  render() {
    const { children } = this.props;
    return (
      <LiveWrapper>
        <LiveProvider
          code={children}
          scope={{...all, Logo, ImgUrl, FiInfo, FiThumbsUp}}
          mountStylesheet={false}
        >
          <Preview />
          <LiveError />
          <TextEditor />
        </LiveProvider>
      </LiveWrapper>
    );
  }
}

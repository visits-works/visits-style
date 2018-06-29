import React, { Component, createContext, createRef, Fragment } from 'react';
import { createPortal, render } from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeConfig } from 'docz';
import styled, { StyleSheetManager } from 'styled-components';

const noop = () => {}
const EVENTS = [
	'Copy',
	'Cut',
	'Paste',
	'CompositionEnd',
	'CompositionStart',
	'CompositionUpdate',
	'KeyDown',
	'KeyPress',
	'KeyUp',
	'Focus',
	'Blur',
	'Change',
	'Input',
	'Invalid',
	'Submit',
	'Click',
	'ContextMenu',
	'DoubleClick',
	'Drag',
	'DragEnd',
	'DragEnter',
	'DragExit',
	'DragLeave',
	'DragOver',
	'DragStart',
	'Drop',
	'MouseDown',
	'MouseEnter',
	'MouseLeave',
	'MouseMove',
	'MouseOut',
	'MouseOver',
	'MouseUp',
	'Select',
	'TouchCancel',
	'TouchEnd',
	'TouchMove',
	'TouchStart',
	'Scroll',
	'Wheel',
	'Abort',
	'CanPlay',
	'CanPlayThrough',
	'DurationChange',
	'Emptied',
	'Encrypted',
	'Ended',
	'Error',
	'LoadedData',
	'LoadedMetadata',
	'LoadStart',
	'Pause',
	'Play',
	'Playing',
	'Progress',
	'RateChange',
	'Seeked',
	'Seeking',
	'Stalled',
	'Suspend',
	'TimeUpdate',
	'VolumeChange',
	'Waiting',
	'Load',
	'Error',
	'AnimationStart',
	'AnimationEnd',
	'AnimationIteration',
	'TransitionEnd',
	'Toggle'
].reduce((m, e) => {
	m[`on${e}`] = noop
	if (e !== 'MouseEnter' && e !== 'MouseLeave') m[`on${e}Capture`] = noop
	return m
}, {})

const Iframe = styled.iframe`
  width: 100%;
  outline: none;
  border: none;
`;

export default class Frame extends Component {
  static childContextTypes = {
    frame: PropTypes.any,
    window: PropTypes.any,
    document: PropTypes.any,
  }

  getChildContext() {
    return {
      frame: this.frame,
      window: this.window,
      document: this.document
    }
  }

  componentDidMount() {
    const node = this.frame.current;
    node.addEventListener('load', this.handleLoad, true);
  }

  handleLoad = () => {
    const node = this.frame.current;
    this.root = node.contentDocument.querySelector('html');
    node.contentDocument.body.remove();
    this.forceUpdate();
  }

  renderFrame = () => {
    const node = this.frame.current;
    const doc = node.contentDocument;
    const win = doc.defaultView || doc.parentView;

    const contents = (
      <StyleSheetManager target={doc.head}>
        <body {...EVENTS}>
            <div>
              {this.props.children}
            </div>
        </body>
      </StyleSheetManager>
    );

    return [
      createPortal(contents, this.root)
    ];
  }

  componentWillUnmount() {
    this.frame.current.removeEventListener('load', this.handleLoad, true);
    delete this.frame;
  }

  frame = createRef();
  root = null;

  render() {
    const { children, style } = this.props
    return (
      <Iframe
        style={style}
        innerRef={this.frame}
        srcDoc={'<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></head></html>'}
      >
        {this.root && this.renderFrame()}
      </Iframe>
    );
  }
}

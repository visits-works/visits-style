import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import Card from '../Card';
import Col from '../Grid/Col.js';

type Props = {
  size?: number,
  domId?: string,
  show?: boolean,
  children?: Node,
  footer?: Node,
  color?: ColorType,
}

const wrapperStyle = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const dropdownStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
}

export default class Modal extends PureComponent {
  static defaultProps = {
    size: 6,
    domId: 'modal',
    show: false,
    color: 'white',
  }

  static getModal = ({ size, title, children, footer, color }) => {
    return (
      <div style={wrapperStyle}>
        <div style={dropdownStyle} />
        <Col size={size} tabindex="-1" role="dialog" style={{ alignItems: 'center' }}>
          <Card title={title} footer={footer} color={color} role="document">
            {children}
          </Card>
        </Col>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.element = document.getElementById(props.domId);
    if (!this.element) {
      this.element = document.createElement('div');
      this.element.id = props.domId;
      document.body.appendChild(this.element);
    }
  }

  shouldComponentUpdate(props, state) {
    return this.props.show !== props.show;
  }

  componentWillUnmount() {
    if (this.props.domId) {
      this.element.remove();
      this.element = undefined;
    }
  }

  render() {
    if (!this.props.show) return null;
    return createPortal(
      Modal.getModal(this.props),
      this.element,
    );
  }
}

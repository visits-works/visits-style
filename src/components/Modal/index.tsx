import * as React from 'react';
import { createPortal } from 'react-dom';
import Card from '../Card';
import Col from '../Grid/Col';
import { ColorType, ColSizeType } from '../../types';

const wrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const dropdownStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
}

interface Props {
  title?: string;
  size?: ColSizeType;
  domId?: string;
  show?: boolean;
  children?: Node;
  footer?: Node;
  color?: ColorType;
}

export default class Modal extends React.Component<Props> {
  static defaultProps = {
    size: 6,
    domId: 'modal',
    show: false,
    color: 'white',
  }

  static getModal = ({ size, title, children, footer, color }: Props) => {
    return (
      <div style={wrapperStyle}>
        <div style={dropdownStyle} />
        <Col size={size} role="dialog" style={{ alignItems: 'center' }}>
          <Card title={title} footer={footer} color={color}>
            {children}
          </Card>
        </Col>
      </div>
    );
  }

  constructor(props: Props) {
    super(props);
    this.element = document.createElement('div');
    this.element.id = props.domId || 'modal';
    document.body.appendChild(this.element);
  }

  shouldComponentUpdate(props: Props) {
    return this.props.show !== props.show;
  }

  componentWillUnmount() {
    if (this.props.domId) {
      this.element.remove();
    }
  }

  element: HTMLDivElement;

  render() {
    if (!this.props.show) return null;
    return createPortal(
      Modal.getModal(this.props),
      this.element,
    );
  }
}

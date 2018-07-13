import * as React from 'react';
import { createPortal } from 'react-dom';
import Transition from 'react-transition-group/Transition';
import anime from 'animejs';
import Card from '../Card';
import Col from '../Grid/Col';
import { ColorType, ColSizeType } from '../../types';
import { dispatchAnimeDone, addAnimeListener } from '../../utils/anime';

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
  children?: React.ReactNode;
  footer?: React.ReactNode;
  color?: ColorType;
  closeModal: () => void;
}

function animeModalIn (modal: HTMLElement) {
  anime({
    targets: modal,
    scale: [0.8, 1],
    opacity: [0, 1],
    complete: () => dispatchAnimeDone(modal),
    easing: [0.645, 0.045, 0.355, 1],
    duration: 200,
  });
}

function getModal ({ show, size, title, children, footer, color, closeModal }: Props) {
  if (!show) return null;
  return (
    <div style={wrapperStyle}>
      <div style={dropdownStyle} onClick={closeModal} />
        <Transition
          addEndListener={addAnimeListener}
          onEnter={animeModalIn}
          timeout={200}
          in={show}
          appear
        >
          <Col size={size || 6} role="dialog" style={{ alignItems: 'center' }}>
            <Card title={title} footer={footer} color={color}>
              {children}
            </Card>
          </Col>
        </Transition>
    </div>
  );
}

export default class Modal extends React.Component<Props> {
  static defaultProps = {
    domId: 'modal',
    show: false,
    color: 'white',
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
    return createPortal(
      getModal(this.props),
      this.element,
    );
  }
}

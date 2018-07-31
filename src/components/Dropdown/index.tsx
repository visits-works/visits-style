import React from 'react';
import styled, { ColorType, SizeType } from '../../styled';
import CSSTransition from 'react-transition-group/CSSTransition';

import findColorInvert from '../../utils/findColorInvert';
import Button from '../Button';
import Box from '../Box';

const Wrapper = styled(Button)`
  display: inline-flex;
  position: relative;
  vertical-align: top;
`;

const Tooltip = styled(Box)`
  position: absolute;
  display: flex;
  clear: both;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.5rem 0;
  width: auto;

  will-change: transform, opacity;
  transform: scaleY(0.75);
  transform-origin: top;
  opacity: 0;

  transition-property: transform, opacity;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.start {
    transform: scaleY(1);
    opacity: 1;
  }

  &.end {
    transform: scaleY(0.75);
    opacity: 0;
  }
`;

const Divider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const MenuItem = styled.a`
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  text-align: left;
  white-space: nowrap;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 0;

  svg {
    margin-left: -1rem;
    padding-right: 0.5rem;
    font-size: 1.5rem;
  }

  &:hover, &:focus {
    color: ${({ theme }) => theme.text};
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    ${({ theme }) => `
      background-color: ${theme.primary};
      color: ${findColorInvert(theme.primary)}
    `};
  }
`;

interface Props {
  label: React.ReactNode;
  color?: ColorType;
  children?: React.ReactNode | React.ReactNode;
  right?: boolean;
  size?: SizeType;
}

interface State {
  show: boolean;
  style: any;
}

export default class Dropdown extends React.Component<Props, State> {
  state = { show: false, style: {} }

  shouldComponentUpdate(props: Props, state: State) {
    return this.state.show !== state.show;
  }

  openDropdown = () => {
    if (this.state.show || !this.element.current) return;
    const height = this.element.current.offsetHeight + 2;
    const style = { top: `${height}px`, left: 0 };

    this.setState({ style, show: true });
  }

  closeDropdown = () => {
    if (this.state.show) this.setState({ show: false });
  }

  onClickChild = (props: { onClick?: () => void }) => () => {
    if (props.onClick) props.onClick();
    if (this.element.current) this.element.current.blur();
  }

  element = React.createRef<HTMLDivElement>();

  render() {
    const { label, color, size, children } = this.props;
    const { show, style } = this.state;
    return (
      <Wrapper
        innerRef={this.element}
        color={color || 'text'}
        size={size}
        onFocus={this.openDropdown}
        onBlur={this.closeDropdown}
      >
        {label}
        <CSSTransition
          classNames={{
            appear: 'start',
            enterDone: 'start',
            exit: 'end',
          }}
          in={show}
          timeout={150}
          unmountOnExit
        >
          <Tooltip style={style}>
            {React.Children.map(children, child => {
              // @ts-ignore
              if (child.props.divider) {
                return <Divider />;
              }
              // @ts-ignore
              return <MenuItem {...child.props} onClick={this.onClickChild(child.props)} />;
            })}
          </Tooltip>
        </CSSTransition>
      </Wrapper>
    );
  }
}

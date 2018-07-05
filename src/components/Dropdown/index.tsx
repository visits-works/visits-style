import * as React from 'react';
import styled from '../../styled';

import findColorInvert from '../../utils/findColorInvert';
import Button from '../Button';
import Box from '../Box';
import { ColorType, SizeType } from '../../types';

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: top;
`;

const Tooltip = styled(Box)<{ show?: boolean }>`
  position: absolute;
  display: none;
  clear: both;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  will-change: transform;
  padding: 0.5rem 0;
  width: auto;

  ${({ show }) => (show ? 'display: flex;' : '')}
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
  text-align: inherit;
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
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    ${({ theme }) => `
      background-color: ${theme.primary};
      color: ${findColorInvert(theme.primary)}
    `};
  }
`;

const shadowStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  zIndex: 1,
}

interface Props {
  label: React.ReactNode;
  color?: ColorType;
  children?: Array<React.ReactElement<any>>;
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
    const style = { transform: `translate3d(0px, ${height}px, 0px)`, top: 0, left: 0 };

    this.setState({ show: true, style });
  }

  closeDropdown = () => {
    if (this.state.show) this.setState({ show: false });
  }

  onClickChild = (props: { onClick?: () => void }) => () => {
    if (props.onClick) props.onClick();
    this.closeDropdown();
  }

  element = React.createRef<HTMLDivElement>();

  render() {
    const { label, color, size, children } = this.props;
    const { show, style } = this.state;
    return (
      <Wrapper innerRef={this.element}>
        <Button color={color} size={size} onClick={this.openDropdown}>{label}</Button>
        <Tooltip show={show} style={style}>
          {children && children.map(child => (
            child.props.divider ?
            <Divider /> :
            <MenuItem {...child.props} onClick={this.onClickChild(child.props)} />
          ))}
        </Tooltip>
        {show && <div style={shadowStyle} onClick={this.closeDropdown} />}
      </Wrapper>
    );
  }
}
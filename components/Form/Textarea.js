function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import commonStyle from './style';
import HelpMessage from './HelpMessage';
const Wrapper = styled.span.withConfig({
  displayName: "Textarea__Wrapper",
  componentId: "jj36u2-0"
})(["display:block;position:relative;textarea{", " max-width:100%;width:100%;padding:0.625em;resize:vertical;appearance:none;overflow:auto;outline:none;border-radius:4px;border:1px solid ", ";transition-property:box-shadow;transition-duration:0.15s;transition-timing-function:ease-in-out;", " &:focus{border-color:", ";", "}&:disabled{resize:none;}}&:hover{textarea:not(:disabled):not(:focus){border-color:", ";}}"], commonStyle, ({
  theme,
  error
}) => error ? theme.danger : theme.border, setSize('font-size'), ({
  theme,
  error
}) => error ? theme.danger : theme.primary, ({
  theme,
  error
}) => boxShadow('0.1em', error ? theme.danger : theme.primary), ({
  theme
}) => theme.borderHover);
export default class Textarea extends PureComponent {
  render() {
    const _this$props = this.props,
          {
      help,
      error
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["help", "error"]);

    return React.createElement(Wrapper, {
      error: error
    }, React.createElement("textarea", rest), HelpMessage(help, error));
  }

}

_defineProperty(Textarea, "defaultProps", {
  value: '',
  col: 2,
  row: 5,
  onChange: () => {}
});
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_1 = __importDefault(require("../../styled"));
const Wrapper = styled_1.default.label `
  display: inline-block;
  cursor: pointer;
  line-height: 1.25;
  position: relative;

  input {
    cursor: pointer;
    margin-right: 0.5em;
  }

  input+label {

  }

  &:not(:first-child) {
    margin-left: 0.5em;
  }
`;
class Switch extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.id = `switch_${this.props.name}`;
    }
    render() {
        const { children, ...rest } = this.props;
        return (react_1.default.createElement(Wrapper, null,
            react_1.default.createElement("input", Object.assign({ id: this.id, type: "checkbox" }, rest)),
            react_1.default.createElement("label", { htmlFor: this.id }, children)));
    }
}
Switch.defaultProps = {
    children: null,
    onChange: () => { },
};
exports.default = Switch;

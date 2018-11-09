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
const Box_1 = __importDefault(require("../Box"));
const CardBody = styled_1.default.div `
  padding: 1.25rem;
  margin: 0;
`;
const CardHeader = styled_1.default.header `
  display: flex;
  padding: 0.5rem 1.5rem;
  min-height: 3.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  justify-content: space-between;
`;
const CardFooter = styled_1.default.footer `
  display: flex;
  padding: 0.5rem 1.5rem;
  min-height: 3.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  align-items: center;
  justify-content: space-between;
`;
const CardImage = styled_1.default.a `
  width: 100%;

  img {
    width: 100%;
    padding: 0;
    margin: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
`;
const CardImageHorizontal = styled_1.default.a `
  flex: 0 0 30%;
  min-width: 5rem;
  width: 30%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  background: no-repeat center/cover;
  ${({ url }) => url ? `background-image: url(${url});` : ''}
`;
const horizontalStyle = { flexDirection: 'row' };
class Card extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.renderHeader = () => {
            const { image, title, horizontal } = this.props;
            if (image && !horizontal)
                return (react_1.default.createElement(CardImage, null,
                    react_1.default.createElement("img", { src: image })));
            if (image && horizontal)
                return (react_1.default.createElement(CardImageHorizontal, { url: image }));
            if (title && !horizontal)
                return (react_1.default.createElement(CardHeader, null,
                    react_1.default.createElement("h3", null, title)));
            return null;
        };
    }
    render() {
        const { children, horizontal, footer, color } = this.props;
        const header = this.renderHeader();
        const wrapperStyle = horizontal ? horizontalStyle : undefined;
        return (react_1.default.createElement(Box_1.default, { style: wrapperStyle, color: color },
            header,
            react_1.default.createElement(CardBody, null, children),
            footer && (react_1.default.createElement(CardFooter, null, react_1.default.Children.only(footer)))));
    }
}
exports.default = Card;

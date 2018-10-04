const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
// require('jest-styled-components');

enzyme.configure({ adapter: new Adapter() });

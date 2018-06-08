import React from 'react';
import { shallow } from 'enzyme';

import Button, { Wrapper } from '../index';

describe('[ Component Button ] style test', () => {
  const theme = {
    btn: {
      default: '#FFF',
    },
    text: {
      default: '#EEE',
    },
    testColor: '#DDD',
    testBg: '#000',
  };

  it('styled component render', () => {
    expect(shallow(<Wrapper theme={theme} />)).toMatchSnapshot();
  });

  it('default state', () => {
    const Component = shallow(<Wrapper theme={theme} />);
    expect(Component).toHaveStyleRule('background-color', `${theme.btn.default}`);
    expect(Component).toHaveStyleRule('color', `${theme.text.default}`);
  });

  it('change background color', () => {
    const Component = shallow(<Wrapper theme={theme} background="testBg" />);
    expect(Component).toHaveStyleRule('background-color', `${theme.testBg}`);
    expect(Component).toHaveStyleRule('color', `${theme.text.default}`);
  });

  it('change font color', () => {
    const Component = shallow(<Wrapper theme={theme} color="testColor" />);
    expect(Component).toHaveStyleRule('background-color', `${theme.btn.default}`);
    expect(Component).toHaveStyleRule('color', `${theme.testColor}`);
  });

  it('change background and font color', () => {
    const Component = shallow(<Wrapper theme={theme} background="testBg" color="testColor" />);
    expect(Component).toHaveStyleRule('background-color', `${theme.testBg}`);
    expect(Component).toHaveStyleRule('color', `${theme.testColor}`);
  });

  it('add width', () => {
    const Component = shallow(<Wrapper theme={theme} width="width-value" />);
    expect(Component).toHaveStyleRule('width', 'width-value');
  });
});

describe('[ Component Button ] component', () => {
  it('render without error', () => {
    const Component = shallow(<Button />);
    expect(Component).toMatchSnapshot();
  });

  it('onClick works properly', () => {
    const clickEvt = jest.fn();
    const Component = shallow(<Button onClick={clickEvt} />);
    Component.simulate('click');
    expect(clickEvt).toBeCalled();
  });

  it('button with Text', () => {
    const sampleText = 'Test Text';
    const Component = shallow(<Button>{sampleText}</Button>);
    expect(Component.find('div').text()).toEqual(sampleText);
  });
});

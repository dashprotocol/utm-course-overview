import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CollapseBar from '../client/src/components/CollapseBar.jsx';
import TestComponent from '../client/src/components/CollapseBar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('CollapseBar', () => {
  it('should show text', () => {
    const wrapper = shallow(<CollapseBar />);
    const text = wrapper.find('div div');
    expect(text.text()).toBe('Text goes here');
  });
});
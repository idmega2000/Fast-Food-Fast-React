import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('This test the app component', () => {
  it('test the app component', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('BrowserRouter');
    expect(text.length).toEqual(1);
  });
});

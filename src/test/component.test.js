import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import './configEnzyme';

describe('This test the app component', ()=> {
    it('test the app component', () => {
        const wrapper = shallow(<App />)
        const text = wrapper.find('h1').text();
        expect(text).toEqual('Hello World');
    })
})

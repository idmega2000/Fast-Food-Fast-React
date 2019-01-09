import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../src/pages/LandingPage';

describe('This test the app component', ()=> {
    it('test the app component', () => {
        const wrapper = shallow(<LandingPage />)
        const text = wrapper.find('Header');
        expect(text.length).toEqual(1);
    })
})

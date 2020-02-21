import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import NewsList from './components/NewsList'


Enzyme.configure({ adapter: new EnzymeAdapter()})

describe('<NewList />', () => {
    it('mounts', () => {
        const wrapper = mount(<NewsList />)
    })
})
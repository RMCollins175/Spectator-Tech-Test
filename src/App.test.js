import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new EnzymeAdapter()})

test('renders without an error', () => {

})

test('NavBar component mounts correctly', () => {

})

test('DiscoverNews component mounts correctly', () => {
  
})

test('News component mounts correctly', () => {
  
})

test('clicking Learn More button takes us to the NewsAPI', () => {
  
})

test('clicking Go To Link button takes us to original source article', () => {
  
})
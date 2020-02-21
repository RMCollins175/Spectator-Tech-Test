import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import News from './components/News'
import DiscoverNews from './components/DiscoverNews';


Enzyme.configure({ adapter: new EnzymeAdapter()})

test('renders without an error', () => {
  const wrapper = shallow(<News />)
  const appComponent = wrapper.find("[data-test='news-component']")

  expect(appComponent.length).toBe(1)

})

test('DiscoverNews renders with a button ', () => {
  const wrapper = shallow(<DiscoverNews />)
  const appComponent = wrapper.find("[data-test='button-to-api']")

  expect(appComponent.length).toBe(1)

})

// test('NavBar component mounts correctly', () => {

// })

// test('DiscoverNews component mounts correctly', () => {
  
// })

// test('News component mounts correctly', () => {
  
// })

// test('clicking Learn More button takes us to the NewsAPI', () => {
  
// })

// test('clicking Go To Link button takes us to original source article', () => {
  
// })
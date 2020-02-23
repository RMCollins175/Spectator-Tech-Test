import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import News from './components/News'
import DiscoverNews from './components/DiscoverNews';
import NewsList from './components/NewsList';
import NavBar from './components/NavBar';

// import moxios from 'moxios'


Enzyme.configure({ adapter: new EnzymeAdapter()})

// factory function to create a wrapper for News component (parent component)
const setup = (props={}, state=null) => {
  return shallow(<News  {...props} />)
}

// return wrapper containing nodes with the given data-test value
const findTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

test('NavBar component mounts correctly', () => {
  const wrapper = shallow(<NavBar />)
  const appComponent = findTestAttr(wrapper, 'navbar-component')
  expect(appComponent.length).toBe(1)
})

test('News renders without an error', () => {
  const wrapper = setup()
  const appComponent = findTestAttr(wrapper, 'news-component')
  expect(appComponent.length).toBe(1)
})

test('DiscoverNews renders with a button ', () => {
  const wrapper = shallow(<DiscoverNews />)
  const appComponent = findTestAttr(wrapper, 'discover-news-component')
  expect(appComponent.length).toBe(1)
})

// test('NewsList renders', () => {
//   const wrapper = shallow(<NewsList />)
//   const appComponent = findTestAttr(wrapper, 'newslist-component')
//   expect(appComponent.length).toBe(1)
// })

// test("clicking 'Learn More' button takes us to the NewsAPISource", () => {
//   const wrapper = shallow(<DiscoverNews />)
//   // Find button and click
//   const button = wrapper.find("[data-test='button-to-api']")
//   // wrapper.find('a').simulate('click')
//   button.simulate('click')
//   // expect the click event to take you to a specific link
//   // mock the link? 
// })


// test('DiscoverNews component mounts correctly', () => {
  
// })

// test('News component mounts correctly', () => {
  
// })


// test('clicking Go To Link button takes us to original source article', () => {
  
// })


// TESTING INITIAL STATE

test('state results start as empty []', () => {
  const wrapper = setup()
  const intialState = wrapper.state('results')
  expect(intialState).toEqual([])
})



// TESTING API CALL

// describe('get news from NewsApi', ()  => {
//   // send the requests to moxios
//   beforeEach(() => {
//     moxios.install()
//   })
//   afterEach(() => {
//     moxios.uninstall()
//   })
//   test('add news stories to the results state', () => {

//   })
// })


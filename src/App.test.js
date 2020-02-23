import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import News from "./components/News";
import DiscoverNews from "./components/DiscoverNews";
import NewsList from "./components/NewsList";
import NavBar from "./components/NavBar";
import axios from "axios";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// factory function to create a wrapper for News component (parent component)
const setup = (props = {}, state = null) => {
  return shallow(<News {...props} />);
};

// return wrapper containing nodes with the given data-test value
const findTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

// NEWS component Tests //

test("News renders without an error", () => {
  const wrapper = setup();
  const appComponent = findTestAttr(wrapper, "news-component");
  expect(appComponent.length).toBe(1);
});

// Testing intial state
test("state results start as empty []", () => {
  const wrapper = setup();
  const intialState = wrapper.state("results");
  expect(intialState).toEqual([]);
});

// TESTING API CALL

jest.mock("axios");

describe("News component", () => {
  describe("when rendered", () => {
    it("should fetch a list of articles", () => {
      const getSpy = jest.spyOn(axios, "get");

      expect(getSpy).toBeCalled();
    });
  });
});

//  NAVBAR Component Tests //

test("NavBar component mounts correctly", () => {
  const wrapper = shallow(<NavBar />);
  const appComponent = findTestAttr(wrapper, "navbar-component");
  expect(appComponent.length).toBe(1);
});

// DISCOVER NEWS Component tests

test("DiscoverNews mounts ", () => {
  const wrapper = shallow(<DiscoverNews />);
  const appComponent = findTestAttr(wrapper, "discover-news-component");
  expect(appComponent.length).toBe(1);
});

describe("DiscoverNews component", () => {
  it('contains a header with the header "The Spectator News!"', () => {
    const wrapper = shallow(<DiscoverNews />);
    expect(
      wrapper.containsMatchingElement(
        <h1>
          The <span>Spectator News</span>
        </h1>
      )
    ).toEqual(true);
  });
});

describe("DiscoverNews component", () => {
  it("DiscoverNews renders with a button named 'Powered by NewsAPI'", () => {
    const wrapper = shallow(<DiscoverNews />);
    expect(
      wrapper.containsMatchingElement(
        <a href="https://newsapi.org/">Powered by NewsAPI</a>
      )
    ).toEqual(true);
  });
});


// test("clicking 'Powered by NewsAPI' button takes us to the NewsAPISource", () => {
//   const wrapper = shallow(<DiscoverNews />)
//   // Find button and click
//   const button = wrapper.find("[data-test='button-to-api']")
//   // wrapper.find('a').simulate('click')
//   button.simulate('click')
//   // expect the click event to take you to a specific link
//   // mock the link?
// })


// NewsList Component TESTS //

test("NewsList renders", () => {
  const wrapper = shallow(<NewsList />);
  const appComponent = findTestAttr(wrapper, "newslist-component");
  // add dummy newStories data here
  expect(appComponent.length).toBe(1);
});


// NewsListItem Component TESTS //

// test('clicking Go To Link button takes us to original source article', () => {

// })




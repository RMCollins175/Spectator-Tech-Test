import React, { Component } from "react";
import DiscoverNews from "./DiscoverNews";
import NavBar from "./NavBar";
import NewsList from "./NewsList.js";
import NewsStory from "./NewsStory"

import { Switch, Route, Redirect } from "react-router-dom";

import Axios from "axios";

const baseAPI =
  "http://newsapi.org/v2/top-headlines?country=gb&apiKey=e8d527c9872c46219461b1d3ac282653";

const searchAPI = "http://newsapi.org/v2/everything?q=";
const apiKey = "&apiKey=e8d527c9872c46219461b1d3ac282653";

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  async searchNews(keyword) {
    const response = await Axios.get(`${searchAPI}${keyword}${apiKey}`);
    console.log(response.data.articles)
    this.setState({ results: response.data.articles});
  }

  async componentDidMount() {
    this._isMounted = true;
    const response = await Axios.get(`${baseAPI}`);
    this.setState({ results: response.data.articles});
    console.log(this.state.results)
  }

  render() {

    const { results, articles } = this.state;

    return (
        <>
        <NavBar searchNews={keyword => this.searchNews(keyword)} />
        <DiscoverNews />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <NewsList newsStories={results || [] } newsArray={articles} />}
          />
          <Route 
            exact
            path="/news/:title"
            render={(routeProps) => <NewsStory {...routeProps} />}
            />
        </Switch>
        <Redirect to="/" />
      </>
    );
  }
}

// i somehow need to find the position of the NewsListItem that i am clicking and match it 
// to the one in this.state.results, assign that a value and pass it in as the story route params
// find which position it is in the response.data.articles array
// set a state with that as this.state.newsStory
// then pass that story as (route)props to NewsStory component

// findIndex

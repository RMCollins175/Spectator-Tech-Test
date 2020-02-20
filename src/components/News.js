import React, { Component } from "react";
import DiscoverNews from "./DiscoverNews";
import NavBar from "./NavBar";
import NewsList from "./NewsList.js";
import uuid from 'uuid'

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
    let response = await Axios.get(`${searchAPI}${keyword}${apiKey}`);
    console.log(response);
  }

  async componentDidMount() {
    let response = await Axios.get(`${baseAPI}`);
    console.log(response.data.articles);
    this.setState({ results: response.data.articles });
  }

  render() {
    const { results } = this.state;

    return (
      <>
        <NavBar searchNews={keyword => this.searchNews(keyword)} />
        <DiscoverNews />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <NewsList newsStories={results || []} />}
          />
          {/* <Route 
            exact
            path="/news/:story"
            render={() => <NewsStory {...props} story={}}
          /> */}
        </Switch>
      </>
    );
  }
}

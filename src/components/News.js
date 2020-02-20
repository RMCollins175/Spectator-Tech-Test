import React, { Component } from "react";
import DiscoverNews from "./DiscoverNews";
import NavBar from "./NavBar";
import NewsList from "./NewsList.js";

import Axios from "axios";

const baseAPI =
  "http://newsapi.org/v2/top-headlines?country=gb&apiKey=55f245758a054a6381d493b655144574";

const searchAPI = "http://newsapi.org/v2/everything?q="
const apiKey = "&apiKey=55f245758a054a6381d493b655144574"

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

//   async searchNews(keyword) {
//     let response = await Axios.get(`${searchAPI}${keyword}${apiKey}`)
//     console.log(response)
//   }

  async componentDidMount() {
    let response = await Axios.get(`${baseAPI}`);
    console.log(response.data.articles);
    this.setState({ results: response.data.articles });
  }

  render() {
    const { results } = this.state;

    return (
      <>
        <NavBar 
        searchNews={keyword => this.searchNews(keyword)} 
        />
        <DiscoverNews />
        <NewsList 
        newsStories={results || []} 
        />
      </>
    );
  }
}

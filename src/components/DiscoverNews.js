import React, { Component } from "react";
import './DiscoverStyles.css'

export default class DiscoverNews extends Component {
  render() {
    return (
      <div>
        <section
          className="jumbotron text-center"
          data-test="discover-news-component"
          style={{ fontFamily: "Sorts Mill Goudy", backgroundColor: "white" }}
        >
          <div className="title">
            <h1>
              The <span>Spectator News</span>
            </h1>
          </div>
          <p className="lead">
            All the latest news from around the world given to you by the
            biggest broadcasters!
          </p>
          <a
            className="btn btn-danger btn-md"
            href="https://newsapi.org/"
            role="button"
            data-test="button-to-api"
          >
            Powered by NewsAPI
          </a>
        </section>
      </div>
    );
  }
}


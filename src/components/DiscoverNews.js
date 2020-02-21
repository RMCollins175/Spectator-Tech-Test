import React, { Component } from "react";

export default class DiscoverNews extends Component {
  render() {
    return (
      <div >
        <section id="header" className="jumbotron">
          <h1 className="display-4">The Spectator News</h1>
            <p className="lead">
              All the latest news from around the world given to you by the biggest broadcasters!
            </p>
          <a className="btn btn-danger btn-lg" href="https://newsapi.org/" role="button" data-test="button-to-api">Learn more</a>
        </section>
      </div>
    );
  }
}

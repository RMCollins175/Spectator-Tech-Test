import React, { Component } from "react";

export default class DiscoverNews extends Component {
  render() {
    return (
      <div>
        <section id="header" class="jumbotron">
          <h1 class="display-4">The Spectator News</h1>
            <p class="lead">
              All the latest news from around the world given to you by the biggest broadcasters!
            </p>
          <a class="btn btn-danger btn-lg" href="https://newsapi.org/" role="button">Learn more</a>
        </section>
      </div>
    );
  }
}

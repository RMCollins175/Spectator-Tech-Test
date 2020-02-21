import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="sticky-footer" className="py-4 bg-danger text-white-50">
          <div className="container text-center">
            <small>Powered by <a href="https://newsapi.org/">NewsAPI</a></small>
          </div>
        </footer>
      </div>
    );
  }
}

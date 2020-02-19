import React, { Component } from "react";
import Moment from 'react-moment';

export default class NewsList extends Component {
  render() {
    const stories = this.props.newsStories.map(story => (
        <div class="col-lg-4 mb-3">
          <div class="card">
            <img src={story.urlToImage} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{story.title}</h5>
              <p class="card-text">
                {story.source.name}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                  <Moment fromNow>{story.publishedAt}</Moment>
                  </small>
              <div class="align-items-end">
                <a href={story.url} class="btn btn-outline-danger btn-sm">
                  Go to Link
                </a>
              </div>
            </div>
          </div>
        </div>
    ));

    return (
        <div class="container">
            <div class="row">
            {stories}
            </div>
        </div>
    )
  }
}

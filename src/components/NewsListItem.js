import React, { Component } from "react";
import Moment from "react-moment";

export default class NewsListItem extends Component {
  render() {
    const {
      image,
      title,
      content,
      description,
      author,
      source,
      link,
      publishedTime
    } = this.props;

    return (
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <small>{content}</small>
            {/* or {description} */}
            <footer class="blockquote-footer">
              <small class="text-muted">
                <cite title="Source Title">{author}</cite>
              </small>
            </footer>
            <p class="card-text pt-4">{source.name}</p>
          </div>
          <div class="card-footer d-flex justify-content-between ">
            <a href={link} class="btn btn-outline-danger btn-sm">
              Go to Link
            </a>
            <small class="text-muted">
              Published <Moment fromNow>{publishedTime}</Moment>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default class NewsListItem extends Component {

  handleClick = () => {
    console.log()
  }

  render() {
    const {
      image,
      title,
      content,
      // description,
      author,
      source,
      link,
      publishedTime
    } = this.props;

    return (
      <div className="col-lg-4 mb-3" onClick={this.handleClick}>
        <div className="card">
          <Link to={`/news/${title}`} style={{ color: "black" }}>
            <img src={image} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <small>{content}</small>
            {/* or {description} */}
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">{author}</cite>
              </small>
            </footer>
            <p className="card-text pt-4">{source.name}</p>
          </div>
          <div className="card-footer d-flex justify-content-between ">
            <a href={link} className="btn btn-outline-danger btn-sm">
              Go to Link
            </a>
            <small className="text-muted">
              Published <Moment fromNow>{publishedTime}</Moment>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

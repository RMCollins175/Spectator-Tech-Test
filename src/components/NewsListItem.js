import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import './NewsListItem.css'

export default class NewsListItem extends Component {

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
      <div className="col-lg-4 mb-3 NewsListItem-container" >
        <div className="card">
          <Link to={`/news/${encodeURIComponent(title)}`} style={{ color: "black" }}>
            <img src={image} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <footer>
              <small className="text-muted">
                <cite className="author" title="Source Title" style={{fontFamily:'Sorts Mill Goudy', color: "red", fontSize: "1rem"}}>{author}</cite>
              </small>
            </footer>
            <h5 className="card-title" style={{fontFamily:'Sorts Mill Goudy', fontWeight: "500"}}>{title}</h5>
            <small>{content}</small>
            <p className="card-text pt-4" style={{fontFamily:'Sorts Mill Goudy'}} >{source}</p>
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

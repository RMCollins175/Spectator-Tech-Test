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

    // console.log("URI TITLE", encodeURIComponent(title))
    // console.log("TITLE", title)
    console.log(author)


    return (
      <div className="col-lg-4 mb-3" onClick={this.handleClick}>
        <div className="card">
          <Link to={`/news/${title}`} style={{ color: "black" }}>
            <img src={image} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title" style={{fontFamily:'Sorts Mill Goudy', color: "red", fontSize: "1rem"}}>{author}</cite>
              </small>
            </footer>
            <h5 className="card-title" style={{fontFamily:'Sorts Mill Goudy'}}>{title}</h5>
            {/* <small>{content}</small> */}
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

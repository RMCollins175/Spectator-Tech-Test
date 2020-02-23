import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default class NewsStory extends Component {

  // match the specific article against the array of article objects and return it
  findArticle = () => {
    let currentArticle = this.props.newsStories.find(
      a => decodeURIComponent(a.title) === (this.props.match.params.title)
    );

    return currentArticle;
  };

  render() {
    const article = this.findArticle();

    // checks if article is empty (which it will be before componentDidMount) and to return null before component is re-rendered
    if (!article) return null;

    return (
      <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="mt-4" style={{color: "black", fontWeight: "300", letterSpacing: "0rem"}}>{article.title}</h1>
          <p className="lead">
            by
            <span style={{color: "#d30d1d", fontSize: "2rem" }}> {article.author}</span>
          </p>
          <hr></hr>
          <p><Moment fromNow>{article.publishedAt}</Moment></p>
          <hr></hr>
          <img
            className="img-fluid rounded"
            src={article.urlToImage}
            alt={article.title}
          ></img>
          <hr></hr>
          <p>{article.content}</p>
          <hr></hr>
          
          <div className="pb-3 text-left">
            <Link to="/" className="btn btn-danger center">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


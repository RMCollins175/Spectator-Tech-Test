import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Axios from "axios";

const baseAPI =
  "http://newsapi.org/v2/top-headlines?country=gb&apiKey=e8d527c9872c46219461b1d3ac282653";

export default class NewsStory extends Component {
  // Prevent React setState on unmounted Component
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      article: []
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    const response = await Axios.get(`${baseAPI}`);

    if (this._isMounted) {
      this.setState({ articles: response.data.articles });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // match the specific article against the array of article objects and return it
  findArticle = () => {
    const article = this.props;
    let currentArticle = this.state.articles.find(
      a => decodeURIComponent(a.title) === article.match.params.title
    );
    return currentArticle;
  };

  render() {
    const article = this.findArticle();

    console.log("PARAMS", this.props.match.params);
    console.log(article);

    // checks if article is empty (which it will be before componentDidMount) and to return null before component is re-rendered
    if (!article) return null;

    return (
      <div className="container">
      <div className="row">
        <div class="col-lg-12">
          <h1 class="mt-4" style={{color: "black", fontWeight: "300", letterSpacing: "0rem"}}>{article.title}</h1>
          <p class="lead">
            by
            <span style={{color: "#d30d1d", fontSize: "2rem" }}> {article.author}</span>
          </p>
          <hr></hr>
          <p><Moment fromNow>{article.publishedAt}</Moment></p>
          <hr></hr>
          <img
            class="img-fluid rounded"
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


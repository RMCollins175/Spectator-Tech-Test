import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const baseAPI =
  "http://newsapi.org/v2/top-headlines?country=gb&apiKey=e8d527c9872c46219461b1d3ac282653";

export default class NewsStory extends Component {
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

  findArticle = () => {
    const article = this.props;
    let currentArticle = this.state.articles.find(
      a => a.title === article.match.params.title
    );
    return currentArticle;
  };

  render() {
    const article = this.findArticle();
    console.log("1", article);
    if (!article) return null;
    console.log("2", article);
    return (
      <div className="container">
        <div className="card mb-3">
          <img
            src={article.urlToImage}
            className="card-img-top"
            alt={article.title}
          />
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text" style={{minHeight: "100vh"}}>{article.content}</p>
            <p className="card-text">
              <div>
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
              <div>
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </p>
          </div>
        </div>
        <Link to="/" className="btn btn-danger center">
          Go Back
        </Link>
      </div>
    );
  }
}

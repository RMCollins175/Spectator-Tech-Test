import React, { Component } from "react";

export default class NavBar extends Component {

  constructor(props) {
    super(props) 
    this.state = {keyword: ""}
  }

  handleChange = event => {
    const {name , value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    console.log("submission")
    event.preventDefault()
    this.props.searchNews(this.state.keyword)
  }

  render() {
    return (
      <div data-test="navbar-component" style={{fontFamily:'Sorts Mill Goudy, serif'}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  href="/"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More News
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    US News
                  </a>
                  <a className="dropdown-item" href="/">
                    Global News
                  </a>
                  <a className="dropdown-item" href="/">
                    Economics
                  </a>
                  <a className="dropdown-item" href="/">
                    Politics
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    UK News
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search..."
                aria-label="Search"
                name="keyword"
                value={this.state.keyword}
                onChange={this.handleChange}
              />
              <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
                onClick={this.handleSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

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
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            News
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                name="keyword"
                value={this.state.keyword}
                onChange={this.handleChange}
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
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

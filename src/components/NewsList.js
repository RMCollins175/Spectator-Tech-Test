import React, { Component } from "react";
import NewsListItem from "./NewsListItem";
import uuid from "uuid";

export default class NewsList extends Component {
  render() {
    const { newsStories } = this.props;

    // This checks if the API has failed and if it has to render an errorMessage set in state
    if (newsStories.length === 1) {
      return (
        <div
          style={{
            padding: "10px",
            color: "red",
            fontFamily: "Sorts Mill Goudy",
            fontSize: "2rem"
          }}
        >
          {newsStories[0].text}
        </div>
      );
    }

    const stories = this.props.newsStories.map(story => {
      return (
        <NewsListItem
          image={story.urlToImage}
          title={story.title}
          content={story.content}
          description={story.description}
          author={story.author}
          source={story.source.name}
          link={story.url}
          publishedTime={story.publishedAt}
          key={uuid()}
        />
      );
    });
    return (
      <div className="container" data-test="newslist-component">
        <div className="row">{stories}</div>
      </div>
    );
  }
}

import React, { Component } from "react";
import NewsListItem from "./NewsListItem";
import uuid from 'uuid'

export default class NewsList extends Component {
  render() {
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
      <div class="container">
        <div class="row">{stories}</div>
      </div>
    );
  }
}

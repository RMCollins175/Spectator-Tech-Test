import React, { Component } from "react";
import NewsListItem from "./NewsListItem";
import uuid from 'uuid'

export default class NewsList extends Component {


// handleClick = (storyId) => {
//   p
// }

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
          onClick={this.handleClick}
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

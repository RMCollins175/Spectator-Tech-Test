import React, { Component } from "react";
import NewsListItem from "./NewsListItem";
import uuid from "uuid";

export default class NewsList extends Component {

  render() {

    const { newsStories } = this.props

    if (newsStories.length === 1) {
      return <div style={{padding: "10px", color: "red"}}>{newsStories[0].text}</div>
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
      <div className="container">
          <div className="row">{stories}</div>
      </div>
    );
  }
}

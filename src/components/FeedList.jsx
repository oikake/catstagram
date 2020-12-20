// Exercise 2: Set It Up
// [x] Write a class component
// [x] Make it a div with className "FeedList"
// [x] Import "FeedItem"
// [x] Include "FeedItem" inside the div
// [x] "Export default" the "FeedList" component!

// Exercise 3: Prop It Up
// [x] FeedList should accept props as params
// [x] Destructure photos from props
// [x] Iterate over the data and map each photo data to a FeedItem

import React, { Component } from "react";
import FeedItem from "./FeedItem";

class FeedList extends Component {
  handleFeedListOrder = () => {
    const photos = [...this.props.photos];

    // TODO: toggle order by date, ascending, descending. etc
    photos.reverse();

    return {
      photos
    };
  };

  render() {
    const { photos } = this.handleFeedListOrder();
    console.log(photos);

    const feedItems = photos.map(photo => (
      <FeedItem photo={photo} key={photo.id} />
    ));

    return <div className="FeedList">{feedItems}</div>;
  }
}

export default FeedList;

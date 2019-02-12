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
  render() {
    const { photos } = this.props;

    return (
      <div className="FeedList">
        {photos.map((photo, i) => (
          <FeedItem photo={photo} key={i} />
        ))}
      </div>
    );
  }
}

export default FeedList;

// Exercise 2: Set It Up
// [x] Write a class component
// [x] Make it a div with className "FeedList"
// [x] Import "FeedItem"
// [x] Include "FeedItem" inside the div
// [x] "Export default" the "FeedList" component!

// Exercise 3: Prop It Up
// [] FeedList should accept props as params
// [] Destructure photos from props
// [] Iterate over the data and map each photo data to a FeedItem

import React, { Component } from "react";
import FeedItem from "./FeedItem";

class FeedList extends Component {
  render() {
    return (
      <div className="FeedList">
        <FeedItem />
      </div>
    );
  }
}

export default FeedList;

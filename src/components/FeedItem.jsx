// Exercise 2: Set It Up
// [x] Write a class component
// [x] Make it a div with className "FeedItem"
// [x] Make an img element inside
// [x] Import "Likes", include it underneath img
// [x] "Export default" the "FeedItem" component!

// Exercise 3: Prop It Up
// [x] Pass in props as params to the component
// [x] Destructure what you need from the props
//    Hint: what do you need in order to get the image to display?
//    Hint: what do you need in order to get likes to display in the Likes component?

import React, { Component } from "react";
import Likes from "./Likes";

class FeedItem extends Component {
  render() {
    const { photo } = this.props;
    const { url, likes } = photo;

    return (
      <div className="FeedItem">
        <img className="Image" src={url} alt="" />
        <Likes likesTotal={likes} />
      </div>
    );
  }
}

export default FeedItem;

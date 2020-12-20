// Exercise 2: Set It Up
// [x] Write a class component
// [x] Make it a div with a className of "HomePage"
// [x] Import "ImageUploaderForm" and "FeedList"
// [x] Include both components inside the "Homepage" div
// [x] "Export default" the "HomePage" component!

// Exercise 3: Prop It Up
// [x] Need to extract photos from data and then pass it into "FeedList"

// Exercise 5: Let’s Get InFormation - BONUS
// [x] In order to get "Homepage" render the photo url you have uploaded to "ImageUploader" form,
//    you will need to create a function called "handleAddPhoto" that updates photos state by
//    accepting a url and creating a new object in photos state of the homepage component.
// [x] Then pass in that function as props to "ImageUploaderForm"
//    and when the user submits, call that function with the user submitted url.

import React, { Component } from "react";
import data from "../../data.json";
import ImageUploaderForm from "../components/ImageUploaderForm.jsx";
import FeedList from "../components/FeedList.jsx";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: data.photos
    };
  }

  handleAddPhoto = url => {
    this.setState(prevState => {
      const newPhoto = {
        id: prevState.photos.length + 1,
        title: "blah",
        url: url,
        likes: 0
      };

      return {
        photos: prevState.photos.concat([newPhoto])
      };
    });
  };

  render() {
    return (
      <div className="HomePage">
        <h2>Upload a Cat</h2>
        <ImageUploaderForm handleAddPhoto={this.handleAddPhoto} />

        <h2>Catz</h2>
        <FeedList photos={this.state.photos} />
      </div>
    );
  }
}

export default HomePage;

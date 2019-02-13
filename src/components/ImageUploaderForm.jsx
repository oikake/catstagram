// Exercise 2: Set It Up
// [x] Write a class component
// [x] Make it a form element with className "ImageUploaderForm"
// [x] Write one input element and button element inside
// [x] "Export default" the "ImageUploaderForm" component!

// Exercise 5: Get InFormation
// [x] Rewrite this component to accept user input
//    The goal: When the user inputs a url, the component should log it to the console
//    You might want to read a little bit more about forms here: https://reactjs.org/docs/forms.html
//    but essentially, there are two parts to this:
// [x] 1) the input reflecting it's current value when the input changes
// [x] 2) and submitting the form.
//    For 1), you will need to create an handleChange function and pass it as a prop to the <input> element.
//    handleChange will set the state with the value of the target of the event passed to it.
//    For 2) you will need to create a handleSubmit function and pass it as an onClick prop to the button.
//    handleSubmit will be the one submitting - ie console.log the current url in the state for now.

// Exercise 5: BONUS
// [] Goal: make this form actually upload an image to the feed!
// When a user inputs a full image url, it should update the
// feed to include the image as a FeedItem!

// [] All the data for the photos are located in HomePage -
// so how do you get data from the user input of the ImageUploaderForm
// to the HomePage component and update the photo data?
// First of all the, photo data in HomePage will be updating (somehow, more on that later).  As such, if
// data is going to change inside of a component, what should you put it in (hint: internal state!)

// [] Then, how are you going to get the new photo url from ImageUploaderForm back to Homepage?
// Pass in a function called handleAddPhoto from HomePage to ImageUploaderForm that
// takes the url of the photo updates photos state with by creating a new object in the photos data.
// Make sure that function is called on handleSubmit in ImageUploaderForm!

import React, { Component } from "react";
// import { isURL } from "validator";
// import request from "request";
// var urlExists = require("url-exists");

class ImageUploaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  handleChange = e => {
    const url = e.target.value;
    this.setState({ url: url });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = this.state.url;
    console.log("url: " + url);
    urlExists(url, function(err, exists) {
      console.log(exists); // false
    });
  };

  render() {
    const { url } = this.state.url;

    return (
      <form name="ImageUploaderForm">
        <input
          placeholder="Add URL here"
          type="url"
          pattern="https?://.+"
          required
          value={url}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit </button>
      </form>
    );
  }
}

export default ImageUploaderForm;

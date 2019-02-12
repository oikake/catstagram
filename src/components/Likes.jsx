// Exercise 2: Set It Up
// [x] Write a class component
// [x] Make it a div with a class name of "Likes"
// [x] Write a span and a button element inside
// [x] "Export default" the component!

// Exercise 3: Prop It Up
// [x] Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// [] Create a button that toggles between two states: "Liked" and "Not liked (yet)"
// [] Add a constructor with initial state
// [] Add a button to the rendered JSX with an onClick attribute
// [] Add a method to handle the click/ change the state
// [] Hook up the button text to the state

// BONUS: Create a likes counter
// [] Take in a prop for the number of likes
// [] Increase or decrease the likes based on whether button click is like/ unlike
//    Hint: take the total likes as a prop, and convert it to state

import React, { Component } from "react";

class Likes extends Component {
  render() {
    // const likesTotal = '000';
    const { likesTotal } = this.props;

    return (
      <div className="Likes">
        <span>
          <strong>{likesTotal}</strong> likes
        </span>
        <button className="LikesButton">Like</button>
      </div>
    );
  }
}

export default Likes;

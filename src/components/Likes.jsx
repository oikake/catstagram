// Exercise 2: Set It Up
// [x] Write a class component
// [x] Make it a div with a class name of "Likes"
// [x] Write a span and a button element inside
// [x] "Export default" the component!

// Exercise 3: Prop It Up
// [x] Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// [x] Create a button that toggles between two states: "Liked" and "Not liked (yet)"
// [x] Add a constructor with initial state
// [x] Add a button to the rendered JSX with an onClick attribute
// [x] Add a method to handle the click/ change the state
// [x] Hook up the button text to the state

// BONUS: Create a likes counter
// [] Take in a prop for the number of likes
// [] Increase or decrease the likes based on whether button click is like/ unlike
//    Hint: take the total likes as a prop, and convert it to state

import React, { Component } from "react";

class Likes extends Component {
  constructor(props) {
    super(props);

    const likesNum = this.props.likesTotal;

    this.state = {
      likesNum: likesNum,
      liked: false
    };
  }

  //   https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly
  handleLikeButtonClick = () => {
    const { likesNum, liked } = this.state;

    this.setState({
      likesNum: likesNum,
      liked: !liked
    });
  };

  handleLikeIncrementButtonClick = () => {
    let items = this.state;

    items.likesNum += 1;
    console.log(items);
    this.setState(items);
  };

  handleLikeDecrementButtonClick = () => {
    let items = this.state;

    items.likesNum -= 1;
    console.log(items);
    this.setState(items);
  };

  render() {
    const { likesNum, liked } = this.state;

    return (
      <div className="Likes">
        <span className="likes-text-container">
          <strong>{likesNum}</strong> total likes {liked ? " +1" : ""}
        </span>
        <span className="likes-buttons-container">
          <button
            className="LikesButton"
            onClick={this.handleLikeDecrementButtonClick}
          >
            -
          </button>
          <button
            className="LikesButton"
            onClick={this.handleLikeIncrementButtonClick}
          >
            +
          </button>
          <button className="LikesButton" onClick={this.handleLikeButtonClick}>
            {liked ? "Liked!" : "Not liked"}
          </button>
        </span>
      </div>
    );
  }
}

export default Likes;

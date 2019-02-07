// Exercise 2: Set It Up
// [x] Write a class component
// [x] Make it a ul with a className of "Header"
// [x] Make four li: "Catstagram", "Home", "About", "Profile"
// [x] Put className of "Logo" on the "Castagram" li element
// [x] "Export default" the "Header" component!

// Exercise 6: Routing
// [] Import "Link" from react-router-dom
// [] Use the Link component to link to each route with a 'to' property
// [] Check that your links work!

import React, { Component } from "react";

class Header extends Component {
  render() {
    // return <p>Header </p>;
    return (
      <ul className="Header">
        <li className="Logo">Catstagram</li>
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
      </ul>
    );
  }
}

export default Header;

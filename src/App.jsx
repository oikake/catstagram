// Exercise 1: Render It
// [x] Write a class component
// [x] Make it a div with a className of "App"
// [x] Inside the div include the text "Welcome to Castagram"
//    This can be used to check that the server is working.
// [x] "Export default" the "App" component!

// Exercise 2: Set It Up
// [x] Import "Header" and "Homepage"
// [x] Include them inside of "App" div

// Exercise 6: Routing
// [] Allow your user to route to different pages!
// [] Import BrowserRouter and Router from react-router-dom
// [] Create basic class components on "AboutPage" and "ProfilePage"
// [] Import "AboutPage" and "ProfilePage"
// [] Set up BrowserRouter
// [] Set up Route to with paths to each page
//    (hint: HomePage should "/") and with the appropriate component

import React, { Component } from "react";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;

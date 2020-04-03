// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
// a. An h1 with your name
// b. A paragraph with a little blurb about yourself
// c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).

import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1>Andrew Grube</h1>
      <p>
        I made a list below detailing the various types of pets I have, and
        their names!
      </p>
      <br></br>
      <h2>Dogs</h2>
      <ul>
        <li>Tesla</li>
        <li>Ludo</li>
        <li>Cashew</li>
      </ul>
      <h2>Ferrets</h2>
      <ul>
        <li>Rocket</li>
        <li>Astra</li>
      </ul>
      <h2>Sugar Gliders</h2>
      <ul>
        <li>Oliver</li>
      </ul>
    </div>
  );
}
ReactDOM.render(<MyInfo />, document.getElementById("root"));

// Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page

import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <div>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));

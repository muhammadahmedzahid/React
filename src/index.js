// Import the react and reactDom library
// Below is the JSX syntax
import React from "react";
import ReactDOM from "react-dom";
// import keyword is used to import the things from the node_modules
// require component is used to import the things which is common.
// Create a react component

// component maybe a class or function depends to create the HMTL.
const App = () => {
  return <div>Hi there!</div>;
};
// Take the react component and show it on screen.

ReactDOM.render(<App />, document.querySelector("#root"));

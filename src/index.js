// Import the react and reactDom library
// Below is the JSX syntax
import React from "react";
import ReactDOM from "react-dom";
// import keyword is used to import the things from the node_modules
// require component is used to import the things which is common.
// Create a react component

// component maybe a class or function depends to create the HMTL.
// in the JSX we cannot allow to write the hyphen - between the two words.
// when writing into the return we write the div on the first line.
// or use can use the small bracket before and after ending the code.
// we replace the string quote by {{}} first is to refer the html and other to the object.
// the property is replaced by the quote and the end statment is replaced by the nothing.
// as the inner curly braces represents the java object so we seperate out the properties by comma.
// we may put the names refer as the string called the label.
// we cannot write the class name in the JSX instead we use the name className keyword
const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter a name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue" }}>Submit </button>
    </div>
  );
};
// Take the react component and show it on screen.

ReactDOM.render(<App />, document.querySelector("#root"));

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { className: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "I am in h1 tag"),
    React.createElement("h2", {}, "I am in h2 Tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome Disha to React !!"
);

// const jsxHeading = (
//   <div id="jsxId">
//     <h1 id="jsxHeading">Welcome to React with JSX</h1>
//   </div>
// );

//React Element
const jsxHeading = <h1 id="jsxHeading">Welcome to React with JSX</h1>;
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

//const root = ReactDOM.createRoot(document.getElementById("root"));
//const root1 = ReactDOM.createRoot(document.getElementById("root1"));

//root.render(heading);
//root1.render(parent);
root2.render(jsxHeading);

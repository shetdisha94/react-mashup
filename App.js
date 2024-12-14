import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
  <div id="title">
    <p>
      React Title Component<span> {year}</span>
    </p>
  </div>
);

const titleElement = <h1>React title element</h1>;
const year = 2024;

const Heading = () => {
  return (
    <div id="heading">
      <h1 id="heading">Welcome to React Component</h1>
      {titleElement}
      {TitleComponent()}
      <TitleComponent />
      <TitleComponent></TitleComponent>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);

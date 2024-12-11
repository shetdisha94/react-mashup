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

const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root.render(heading);
root1.render(parent);

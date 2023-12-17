const heading1 = React.createElement("h1", {}, "Hello World from React");
const heading2 = React.createElement("h2", {}, "Hello World from React h2");
const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

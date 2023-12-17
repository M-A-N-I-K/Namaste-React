const heading1 = React.createElement(
	"h1",
	{ id: "Heading" },
	"Hello World from React"
);
const heading2 = React.createElement(
	"h2",
	{ id: "heading" },
	"Hello World from React h2"
);
const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

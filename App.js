// React.createElement(type, props, ...children)
// const element = React.createElement("h1", {}, "this is my first app.js file that hosted the react app kapil");
// const element1 = React.createElement("p", {}, "software engineer in Google");

const parent = React.createElement("div", {id:"parent"}, [React.createElement("h1","id:child1", "this is first child"), React.createElement("h2","id:child2","this is Second Child")])

// console.log(element1)


const root = ReactDOM.createRoot(document.getElementById("root"));
// this is how i render the jsx component through the createElement
root.render(parent);
// root.render(React.createElement(React.Fragment, {}, element, element1));

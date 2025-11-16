// React.createElement(type, props, ...children)
const element = React.createElement("h1", {}, "this is my first app.js file that hosted the react app kapil");
const element1 = React.createElement("p", {}, "software engineer in Google");

console.log(element1)


const root = ReactDOM.createRoot(document.getElementById("root"));
// this is how i render the jsx component through the createElement
root.render(React.createElement(React.Fragment, {}, element, element1));

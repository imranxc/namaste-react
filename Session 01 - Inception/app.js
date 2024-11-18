// let heading = document.createElement("h1");
// heading.innerHTML = "Hello, World from JavaScript";

// let root = document.getElementById("root");
// root.appendChild(heading);

let heading = React.createElement("h1", {id: "headingH1"}, "Hello, World from React"); 
console.log(heading); // object

let rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(heading); // it takes heading object and convert & put it inside html

/*
* Nested HTML Element
<div id="parent">
   <div id="child">
      <h1>Hello World from Nested</h1>
      <h2>Hello World from H2</h2>
   </div>
</div>
*/
let parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div", 
        { id: "child" }, 
        [React.createElement(
            "h1", 
            { className: "heading" }, 
            "Hello World from Nested"
        ), 
        React.createElement(
            "h2", 
            { className: "headingH2" }, 
            "Hello World from H2"
        )]
    )
);

let root = ReactDOM.createRoot(document.body);
root.render(parent);

/*
* Nested HTML Element
<div id="parent">
   <div id="child">
      ...
   </div>
   <div id="child">
      ...
   </div>
</div>
*/
parent = React.createElement(
    "div", 
    { id: "parent" }, 
    [React.createElement(
        "div", 
        { id: "child1" }, 
        [React.createElement(
            "h1", 
            { className: "heading" }, 
            "Hello World from Nested..."
        ), 
        React.createElement(
            "h2", 
            { className: "headingH2" }, 
            "Hello World from H2..."
        )]
    ),
    React.createElement(
        "div", 
        { id: "child2" }, 
        [React.createElement(
            "h1", 
            { className: "heading" }, 
            "Hello World from Nested..."
        ), 
        React.createElement(
            "h2", 
            { className: "headingH2" }, 
            "Hello World from H2..."
        )]
    )]
);

let rootParent = ReactDOM.createRoot(document.getElementById("root"));
rootParent.render(parent);
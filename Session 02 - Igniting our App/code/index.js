import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", null, "Hello, Moscow.");
const root = ReactDOM.createRoot(document.getElementById("heading"));
root.render(heading);
# Episode 01 - Inception

### What is CDN? Why do we use it?

A **Content Delivery Network (CDN)** is a network of servers distributed across various locations to deliver internet content quickly and efficiently. It improves performance by serving content from servers that are geographically closer to users, ensuring faster load times and higher reliability.

### What is Emmet?

**Emmet** is an essential toolkit for web developers that allows you to use shortcuts, which are expanded into full HTML and CSS code. It leverages an abbreviation system commonly used by developers to quickly generate HTML markup and CSS rules.

### Why is `React` known as React?

**React** is named for its ability to "react" to changes. It was developed by Facebook, a platform that constantly updates data, to improve user interface development. React efficiently updates and renders the UI in response to user interactions, such as clicking, submitting, or typing.

### What is crossorigin in script tag?

The `crossorigin` attribute in the `<script>` tag defines how the browser handles cross-origin requests. It is used to enable secure sharing of resources between different domains by managing CORS (Cross-Origin Resource Sharing) permissions.

### What is difference between React and ReactDOM?

**React** is a JavaScript library for building user interfaces, while **ReactDOM** enables React to interact with the DOM.

### What is difference between `react.development.js` and `react.production.js` files?

The `react.development.js` file is used during development and includes extra debugging tools, making it slower (3-5x). The `react.production.js` file is optimized for performance, without extra debugging, and is used in production for faster loading.

### What are async and differ attributes in script tag?

The `async` attribute allows the script to be downloaded in parallel with page parsing and executed as soon as it's ready, without blocking DOM construction.

```html
<script async src="demo_async.js"></script>
<script defer src="demo_defer.js"></script>
```

The `defer` attribute in the script tag tells the browser to download the script in parallel with the page, but only execute it after the HTML is fully parsed. Unlike `async`, `defer` ensures that scripts are executed in the order they appear in the HTML.

### Difference between a Library and Framework?

A **library** is a collection of tools for specific tasks, while a **framework** provides a structure and controls the flow of the application. In a framework, it calls the developer's code; in a library, the developer calls the code. React is a library, Angular is a framework.

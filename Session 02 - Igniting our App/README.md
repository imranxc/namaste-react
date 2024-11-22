# Episode 02 - Igniting Our App

### What is `npm`?

`npm` is a package manager for JavaScript, offering access to the world's largest software registry with over 800,000 open-source packages. Developers use it to install and manage dependencies.

### What is `Parcel`/`Webpack`? Why do we need it?

`Parcel` and `Webpack` are JavaScript bundlers that help manage and optimize web application assets. They bundle code, images, styles, and other resources into efficient packages for the browser. We need them to improve performance, manage dependencies, enable code splitting, and automate tasks like minification and transpilation.

### Commands

```bash
# install parcel as dev dependency
npm install -D parcel 
# or
npm install --save-dev parcel
```

### What is the `.parcel-cache` folder?

The `.parcel-cache` folder stores cached build data to speed up future builds by preventing re-parsing and re-analyzing of your project. This makes Parcel faster in development mode.

### What is `npx`?

`npx` (Node Package eXecute) is a tool that lets developers run any package from the npm registry without installing it. It comes bundled with npm 5.2 and higher.

### What is the difference between `dependencies` and `devDependencies`?

`dependencies` are packages needed for production, while `devDependencies` are only required for development and testing.

### What is Tree Shaking in Parcel?

Tree shaking, or dead code elimination, is the process of removing unused code from your production build. By analyzing the code statically, Parcel can identify and exclude any unused code, ensuring that only the necessary parts are included in the final bundle.

### What is Hot Module Replacement?

A: Hot Module Replacement (HMR) allows updating modules in a running application without a full reload. This helps retain application state and speeds up development by only updating changed code.

### List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.

- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Build for dev and prod bundles

### What is `.gitignore`? What should we add and not add to it?

The `.gitignore` file tells git which files to ignore in your repository. Add files that can be regenerated, like `/node_modules` or `/dist`, but avoid adding essential files like source code or configurations.

### What is the difference between `package.json` and `package-lock.json`?

Both files manage dependencies, but `package.json` also includes project metadata (like scripts, version, and author info). `package-lock.json` locks dependencies to specific versions and should not be published or placed outside the project root.

### Why should I not modify `package-lock.json`?

`package-lock.json` is auto-generated to track exact dependency versions. It should not be manually edited, as doing so can break the sync between `package.json` and `package-lock.json`.

###  What is `node_modules`? Is it a good idea to push it to Git?

The `node_modules` folder contains dependencies installed from npm, not code you've written. You should never modify its contents, as they may be overwritten. It's best not to commit `node_modules` to Git and add it to `.gitignore` instead. 

- `node_modules` can be very large (up to GBs).  
- It can be recreated easily using `package.json`.

### What is the `/dist` folder?

The `/dist` folder contains the minified production-ready code. This is the version used in live web applications. By default, Parcel outputs to the `/dist` folder, but the `--dist-dir` flag can be used to specify a custom directory, like `public`.

### What is `browserslist`?

Browserslist defines a list of target browsers to share across frontend tools for consistent compatibility.

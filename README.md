Table of Contents:
# API vs. Framework vs. Library
# What is Angular? 
# React vs. Angular
# Inversion of Control (IOC)
# Installation
# Node.js  vs. nvm vs. npm
# Creating new Angular project
# Introduction about build
# Just in Time vs. Ahead of Time compilation
# Creating a project
# How Angular app runs?
# What is SPA? (Single Page Application)




# API vs. Framework vs. Library
--------------------------------
1) API:
> A set of rules and protocols that allow different software components to communicate.
> Defines how software interacts with external services or components.
> Example: REST API (e.g., GitHub API, Twitter API) lets you fetch or modify data.
> Think of an API as a menu in a restaurant – it tells you what you can order but doesn’t tell you how the food is prepared.

2) Library:
> A collection of pre-written code that you can call and use in your application to simplify development.
> You call functions from the library when needed.
> Example: Lodash (JavaScript utility functions), NumPy (Python for numerical operations), jQuery (DOM manipulation), React
> Think of a library as a toolbox – you pick and use the tools (functions) as required.


3) Framework:
> A structured environment that dictates how you should organize and build your application.
> It calls your code and provides a set of rules and conventions (Inversion of Control).
> Example: Angular (Complete front-end framework), Spring Boot (Java back-end framework), Django (Python web framework)
> Think of Angular as a full construction kit —it provides everything.


# What is Angular?
--------------------------------
> Angular is a web framework that empowers developers to build fast, reliable applications.
> It is maintained by a dedicated team at Google.
> Angular provides a broad suite of tools, APIs, and libraries to simplify and streamline the development workflow. 
> Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of the team and the size of the codebase.


# React vs. Angular
--------------------------------
Great question! In JavaScript, the distinction between **API, Library, and Framework** becomes clearer when looking at **React** and **Angular**:

### **React (Library) vs. Angular (Framework)**

| Feature            | **React (Library)** | **Angular (Framework)** |
|--------------------|-------------------|-----------------------|
| **Definition**      | A UI library focused on building components | A full-fledged framework for building web apps |
| **Control Flow**   | You call React functions (`useState`, `useEffect`) | Angular dictates the app structure and calls your code |
| **Opinionated?**   | No, you choose your tools (e.g., state management, routing) | Yes, Angular provides built-in solutions (RxJS, Forms, Router) |
| **Flexibility**    | High—you can use React with any backend, state manager, etc. | Lower—you follow Angular's structure and use its modules |
| **Inversion of Control (IoC)** | No (you control the flow) | Yes (Angular manages component lifecycle) |


# Inversion of Control (IOC):
------------------------------
> IOC is a design principle where the control of program flow is shifted from your code to an external system (like a framework). 
> Instead of you calling functions, the framework calls your code when needed.


Example in JavaScript: IoC vs. No IoC

i)Without IoC (You Control the Flow)
In a normal library, you call functions when needed:

```javascript
// Example using a library (React)

function fetchData() {
  console.log("Fetching data...");
}

fetchData(); // You explicitly call the function
```
you are in control—you decide when to call fetchData().


ii) With IoC (Framework Controls the Flow)
In a framework, it calls your code when required, following its rules:

```javascript
// Example in Angular (Framework)
@Component({
  selector: 'app-example',
  template: '<p>Example</p>'
})
export class ExampleComponent implements OnInit {
  ngOnInit() {
    console.log("Component initialized!"); // Angular calls this method
  }
}
```

Here, Angular controls the lifecycle—it calls `ngOnInit()` when the component initializes.


# Installation
-----------------
> Node js should be there.
> "npm install -g @angular/cli" in cmd.

> Checking version:
  - node -v
  - npm -v
  - ng -v
  

# Node.js  vs. nvm vs. npm
---------------------------
1) Node.js
- What is it?
  - A JavaScript runtime that allows you to run JavaScript outside the browser.
  - Comes with built-in modules for file system operations, HTTP servers, etc.

- Key Features:
  - Runs JavaScript on the backend.
  - Uses the V8 engine (same as Chrome).
  - Supports asynchronous programming.

- Command to Check Version: 
  node -v
  
- Example Use:
  console.log("Hello from Node.js!");

  Run it with: node script.js

---

2) NVM (Node Version Manager)
- What is it?
  - A tool to manage multiple versions of Node.js on your system.

- Key Features:
  - Easily switch between Node versions.
  - Install/update Node.js without affecting global settings.
  
- Commands:
  - Install a specific Node version:  
    nvm install 18

  - Use a specific version:  
    nvm use 16

  - List installed versions:  
    nvm list

- Think of NVM as a Node.js version switcher—use different versions for different projects.

---

3) NPM (Node Package Manager)
- What is it?
  - A package manager that comes with Node.js.

- Key Features:
  - Installs and manages JavaScript libraries and dependencies.
  - Uses a package.json file to track project dependencies.

- Commands:
  - Check version:
    npm -v
	
  - Install a package globally:
    npm install -g @angular/cli

  - Install project dependencies:  
    npm install

- Think of NPM as a marketplace for JavaScript libraries—it lets you install and manage packages.


# Creating new Angular project
- ng new proj-name

- You'll be asked some configuration questions:
  - Would you like to add Angular routing? → Yes/No
  - Which stylesheet format would you like to use? → Choose CSS, SCSS, LESS, etc.
  
- Move into the project folder:
cd proj-name

- Start the development server:
ng serve

- or specify a port:
ng serve --port 4201

- Starts the Angular development server and automatically opens the app in the default web browser.
ng serve --open (Shorthand: ng s -o)


- Build the Angular Project
To create a production build: ng build --prod
This generates optimized files inside the dist/ folder.


# Introduction about build
---------------------------
> In Angular (or any frontend framework), "build" refers to the process of converting your source code into an optimized format that browsers can understand. 
> This includes compiling TypeScript, bundling files, minifying, and optimizing performance.  

-Why Is "Build" Needed? 
- Browsers don’t understand TypeScript → It must be converted to JavaScript.  
- Angular uses modules and components → They must be bundled into fewer files.  
- Performance optimization → Reduces file size, removes unused code, and speeds up execution.  
- Security → Hides the original source code to prevent direct modification.  


-What Does the Build Contain?
When you run:  ng build --configuration=production
It generates a /dist/ (distribution) folder containing optimized files like:

| File | Purpose |
|------|---------|
| `index.html`   | The main HTML file that loads the app |
| `main.js`      | Compiled JavaScript from your Angular components |
| `runtime.js`   | Bootstraps the Angular app |
| `polyfills.js` | Ensures compatibility with older browsers |
| `styles.css`   | Minified global styles |
| `assets/`      | Static files like images and fonts |
-----------------

-Development vs. Production Build 
| Feature            | `ng serve` (Dev Mode)     | `ng build --prod` (Prod Mode)    |
|--------------------|---------------------------|----------------------------------|
| **Optimization**   | No                        | Yes (minification, tree-shaking) |
| **File Size**      | Large                     | Small                            |
| **Debugging**      | Easier (with source maps) | Harder (obfuscated code)         |
| **Performance**    | Slower 					 | Faster                           |
| **Error Handling** | More logging              | Less logging (for security)      |


# Just in Time vs. Ahead of Time compilation:
---------------------------------------------
Both JIT (Just-in-Time) and AOT (Ahead-of-Time) involve compilation, but they differ in 'when' and 'how' the compilation happens.

1) JIT Compilation (Just-in-Time)
- When does it happen? 
  JIT compiles the Angular templates at runtime, i.e., when the application is being loaded in the browser.
  
- How does it work?
  1. Angular loads the app's JavaScript (including components, services, etc.).
  2. The Angular compiler runs in the browser and compiles the templates and components into executable code.
  3. Only then does the app start rendering in the browser.

- Impact: Since the compilation happens in the browser during runtime, the initial loading of the app can be slower, and the bundle size is larger because the compiler is included.

---

2) AOT Compilation (Ahead-of-Time)
- When does it happen?
  AOT compiles the Angular templates before the app is run (i.e., at build time, during the ng build process).

- How does it work? 
  1. The Angular compiler is run during the build to pre-compile the TypeScript templates and HTML into optimized JavaScript code.
  2. The compiled templates are included directly in the final bundle, which is served to the browser.
  3. Since the templates are already compiled, the browser doesn't need to run the Angular compiler during execution.

- Impact: AOT results in a smaller and faster app because there's no need for the Angular compiler at runtime, and the browser only receives the already compiled code.

---
Key Difference:
- JIT compiles templates in the browser when the app is loaded.
- AOT compiles templates before the app is served, producing optimized code.

- Why Does AOT Improve Performance?
	- Smaller Bundle: Since templates are precompiled, no need to send the compiler code to the browser.
	- Faster Execution: Precompiled templates are ready to be executed by the browser directly, reducing the time spent compiling in the browser.
	- Early Error Detection: AOT can catch template errors during the build, helping to avoid runtime errors.


# Creating a project:
ng new Proj-name

This will create following folder structure.

-  📂.angular
-  📂node_modules
-  📂src
	-  📂app
		- 📄app-routing.module.ts
		- 📄app.module.ts
		- 📄app.component.html
		- 📄app.component.scss
		- 📄app.component.ts
		- 📄app.component.spec.ts
	
	-  📂assets
		- 📄.gitkeep
		
	-  📂environments
		- 📄environment.ts
		- 📄environment.prod.ts
	
	- 📄favicon.ico
	- 📄index.html
	- 📄main.ts
	- 📄polyfills.ts
	- 📄styles.css
	- 📄test.ts

- 📄.browserslistrc
- 📄.editorconfig
- 📄.gitignore
- 📄angular.json
- 📄karma.conf.js
- 📄package-lock.json
- 📄package.json
- 📄README.md
- 📄tsconfig.app.json
- 📄tsconfig.json
- 📄tsconfig.spec.json


Functinalities of each file are as follows:

> `.angular/`
- This is a cache folder used by the Angular CLI to store temporary build artifacts.
- It speeds up builds by caching intermediate results.
- You can delete this folder safely; Angular will regenerate it when needed.

> `node_modules/`
- Contains all the installed dependencies (packages) listed in `package.json`.
- This folder is created after running `npm install`.
- It includes Angular itself, third-party libraries, and build tools.

> `src/`
- The main source folder where the actual application code resides.
- Contains the `app/`, `assets/`, and `environments/` folders, along with important configuration files.

> `src/app/`
- This folder contains the root application module (`app.module.ts`) and the main component (`app.component.ts`).
- Additional components, services, and modules are typically created inside this folder.

> `src/app/app-routing.module.ts`
- Defines the application's routes using the Angular Router.
- Used to configure navigation between different components/pages.

> `src/app/app.module.ts`
- The root module of the application.
- Declares components, imports necessary Angular modules, and configures services.
- Every Angular application must have at least one module (usually `AppModule`).

> `src/app/app.component.ts`
- The main component of the application (bootstrapped in `app.module.ts`).
- Defines the logic for the root component.

> `src/app/app.component.html`
- The template file (UI) for the `AppComponent`.

> `src/app/app.component.scss`
- The styles specific to `AppComponent` (written in SCSS, but can be changed to CSS).

> `src/app/app.component.spec.ts`
- The unit test file for `AppComponent`.
- Uses Jasmine for testing.

> `src/assets/`
- This folder is used for storing static assets like images, fonts, and JSON files.
- The `assets/` folder is copied to the `dist/` folder when you build the project.

> `src/assets/.gitkeep`
- An empty file used to ensure the `assets/` folder is tracked in Git (Git does not track empty folders).

> `src/environments/`
- Contains environment-specific configuration files.

> `src/environments/environment.ts`
- Contains settings for the development environment.

> `src/environments/environment.prod.ts`
- Contains settings for the production environment.
- Used when running `ng build --prod`.

> `src/favicon.ico`
- The favicon (icon shown in the browser tab).

> `src/index.html`
- The main HTML file that loads the Angular app.
- Contains a `<body>` tag where `AppComponent` is inserted.

> `src/main.ts`
- The entry point of the application.
- Bootstraps the `AppModule` and starts the Angular app.

> `src/polyfills.ts`
- Includes necessary polyfills to support older browsers.

> `src/styles.css`
- The global stylesheet for the application.

> `src/test.ts`
- Configures unit testing using Karma.

> `.browserslistrc`
- Specifies which browsers the application should support.
- Used by tools like Autoprefixer and Babel.

> `.editorconfig`
- Defines coding style guidelines (like indentation and line endings).
- Helps maintain consistency across different code editors.

> `.gitignore`
- Specifies which files and folders should be ignored by Git.
- Commonly ignores `node_modules/`, `dist/`, and other unnecessary files.

> `angular.json`
- The main configuration file for the Angular CLI.
- Defines build options, assets, styles, scripts, and environment settings.

> `karma.conf.js`
- The configuration file for Karma, which runs unit tests.

> `package-lock.json`
- Automatically generated when dependencies are installed.
- Ensures that the exact dependency versions are used in all installations.

> `package.json`
- Contains project metadata and lists dependencies.
- Defines scripts like `ng serve`, `ng build`, and `ng test`.

> `README.md`
- A documentation file containing information about the project.
- Typically includes setup instructions.

> `tsconfig.app.json`
- TypeScript configuration file specifically for the Angular application.

> `tsconfig.json`
- The global TypeScript configuration file.
- Defines TypeScript compiler options.

> `tsconfig.spec.json`
- TypeScript configuration for test files.


# How Angular app runs?

1. Entry Point - `main.ts`
-------------------------------
When you run `ng serve`, `ng build`, or `ng start`, Angular starts execution from `src/main.ts`, which is the main entry point of the application.  

```javascript
// Inside `main.ts`: 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

What happens here:  
- `platformBrowserDynamic()` creates a dynamic platform for running Angular applications in the browser. It returns an instance of PlatformRef,
   which is a reference to the Angular platform. It provides methods to bootstrap modules, destroy the platform, and access the injector.
- `.bootstrapModule(AppModule)` loads the `AppModule`, the root module of the application. And this method returns a promise.
- `.catch(err => console.error(err))` catches any errors during the bootstrapping process.  



2. Bootstrapping `AppModule`  
-----------------------------
Angular loads the `AppModule`, which is the root module of the application.  

```javascript
// Inside `app.module.ts`:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], 
  imports: [BrowserModule], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
```

What happens here:  
- `@NgModule` decorator marks this as an Angular module.  
- `declarations` registers components, directives, and pipes.  
- `imports` loads required modules like `BrowserModule`, which is needed to run an Angular app in a browser.  
- `bootstrap` specifies `AppComponent` as the starting component.  



3. Root Component Initialization  
----------------------------------
Once `AppModule` is loaded, Angular initializes `AppComponent`, which serves as the root component of the application.  

```javascript
// Inside `app.component.ts`:
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practice';
}
```

What happens here:  
- `@Component` decorator marks this as an Angular component defines metadata for `AppComponent`.  
- `selector: 'app-root'` means Angular will replace `<app-root></app-root>` with this component’s HTML.  


4. `index.html` Loads the Root Component  
---------------------------------------
The `index.html` file in `src` acts as the main container for the Angular app.  

```javascript
// Inside `index.html`:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Practice</title>
</head>
<body>
  <app-root></app-root> <!-- This will be replaced with AppComponent -->
</body>
</html>
```

What happens here:  
- The `<app-root>` tag is a placeholder.  
- When Angular starts, it replaces `<app-root>` with `AppComponent`'s HTML.  



5. Rendering and Change Detection  
----------------------------------
- Angular compiles the templates using JIT (Just-in-Time) in development or AOT (Ahead-of-Time) in production.  
- The rendered HTML is inserted into `index.html`.  
- Change detection ensures that UI updates happen whenever the component’s data changes.  


Summary of the Angular Startup Flow  
---------------------------------------
1. `main.ts` starts the application and calls `bootstrapModule(AppModule)`.  
2. `AppModule` loads all necessary components and dependencies.  
3. `AppComponent` is bootstrapped as the main component.  
4. `index.html` contains the `<app-root>` tag, which Angular replaces with `AppComponent`'s content.  
5.  Angular compiles templates, initializes components, and sets up change detection.  


# What is SPA? (Single Page Application)

> A Single Page Application (SPA) is a type of web application that loads a single HTML page and dynamically updates the content without reloading the entire page. 
> Angular is designed for building SPAs.


How does an Angular SPA work?
-----------------------------
i) Bootstraps the Angular app:
platformBrowserDynamic() initializes Angular and loads the root module (AppModule).
This ensures that the entire application runs within a single HTML page (index.html).

ii) Router manages navigation without page reloads:
In a traditional multi-page app, every user action (e.g., clicking a link) triggers a full-page reload.
In an SPA, Angular’s Router Module intercepts navigation and updates only the necessary parts of the page.

iii) Dynamically updates the DOM
Instead of fetching new HTML files from the server, Angular modifies the existing page using JavaScript.


How Components are Stored and Rendered in Angular?
-----------------------------------------------------
1️) At the start (ng serve or ng build)
> Angular compiles all components (.ts, .html, .css) into optimized JavaScript files.
> These files are loaded into the browser when the application first starts.
> The browser does not need to request new HTML files from the server.

2️) When navigating between pages
> Angular does not reload the page.
> Instead, it removes the old component from the DOM and inserts the new component inside <router-outlet>.
> The JavaScript in memory handles this transition without contacting the server.

> The server is only contacted once unless you refresh or fetch new data via an API.









































// TODO:
1) Demonstrate how angular is SPA?
import { App } from "./App.js";

// this class for the optional question & present Run class too -> 
// to run the method asyncroniously pass optional boolean value (true) as second argument.

const app = new App();
const appRef = app.renderPages(8,true);
console.log(appRef);
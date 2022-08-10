import { App } from "./App.js";

// this class for the optional question
const app = new App();
const appRef = app.renderedPagesFunctionAsync(8);
console.log(appRef);
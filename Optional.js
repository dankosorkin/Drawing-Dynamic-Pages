import { App } from "./App.js";

const app = new App();
const appRef = app.renderedPagesFunctionAsync(8);
console.log(appRef);
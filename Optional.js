import { App } from "./app.js";

const app = new App();
const appRef = await app.renderedPagesFunctionAsync(8);
console.log(appRef);
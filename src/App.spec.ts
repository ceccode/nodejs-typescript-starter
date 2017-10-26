import { expect } from "chai";
import App from "./App";

describe("App", () => {

  it("works", () => {
    const APP_NAME = "App name";
    const app = new App(APP_NAME);
    expect(app.getName()).to.equal(APP_NAME);
  });

});

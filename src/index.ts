import * as dotenv from "dotenv";
dotenv.config();
import App from "./App";

const app = new App(process.env.APP_NAME);
log()(`::> Start ${app.getName()}`);

function log() {
  return console.log;
}

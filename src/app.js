const express = require("express");
const path = require("path");
const { dirname } = require("path");
const app = express();
const dir = path.join(__dirname, "../public");
app.use(express.static(dir));
app.get("/test", (request, response) => {
  response.send("<h1>Hello</h1>");
});
app.get("/help", (request, response) => {
  response.send("Hello, How can i help");
});
app.get("/about", (request, response) => {
  response.send([{ name: "Peter", age: 24 }]);
});
app.listen(3000, () => {
  console.log("Server running at 3000");
});

/*

Gå igenom:
* Vad är nodejs? (https://nodejs.org/en/)
* Installera node
* Kör CLI exempel
* Built-in modules (https://www.w3schools.com/nodejs/ref_modules.asp)
* http module (https://nodejs.org/api/http.html)
* Vad är NPM? (https://www.npmjs.com/)
* Express (https://expressjs.com/)

*/

const express = require("express");

const server = express();
const port = 8000;

server.get("/", (req, res) => {
  res.send("<h1>HALLÅ ELLER!!!!</h1>");
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

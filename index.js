/*

Gå igenom:
* Vad är nodejs? (https://nodejs.org/en/)
* Installera node
* Kör CLI exempel
* Built-in modules (https://www.w3schools.com/nodejs/ref_modules.asp)
* http module
* Vad är NPM? (https://www.npmjs.com/)
* Express

*/

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write("<h1>Hoppsan!</h1>");
    res.end();
});

server.listen(8000);


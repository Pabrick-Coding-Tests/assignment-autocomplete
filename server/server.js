const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;
const url = "./server/world-cities.txt";

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

const citiesChunk = readFile(url);
const citiesList = citiesChunk.split("\r\n");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  res.end(JSON.stringify(citiesList));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

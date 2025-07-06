const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }

  res.end("Hello World");
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

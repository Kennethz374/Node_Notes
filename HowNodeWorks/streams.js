//assume we need to read a big file and send it to customers

const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1  wait for entire file to load
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  //solution 2: Streams  this has backpressure problem
  // const readable = fs.createReadStream("tes-file.txt");
  // readable.on("data", chunk => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });

  // readable.on("error", err => {
  //   console.elog(err);
  //   res.statusCode(500);
  //   res.end("file not found!");
  // });

  //solution 3: pipe, speed of receiving data is same as outputing 👍
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res); // readableSource.pipe(writeable Destination)
});

server.listen(8000, () => {
  console.log(`listening in port 8000`);
});

const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
//sales inherit emitter class

const myEmitter = new Sales();
myEmitter.on("newSale", () => {
  console.log("there was a new sale!");
}); // this is a listener that listen to the emit, when myEmitter.emit new sale, it triggers the cb function

myEmitter.on("newSale", () => {
  console.log("customer's name Kenneth");
});

myEmitter.on("newSale", stock => {
  console.log(`there are now ${stock} items left in stock`);
});
myEmitter.emit("newSale", 9); // emit event

////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another received");
});

server.on("close", () => {
  console.log("Sever closed");
});

server.listen(8000, () => {
  console.log("waiting for request....");
});

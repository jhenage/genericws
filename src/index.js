const express = require("express");
const WebSocket = require("ws");
const { createServer } = require("http");
const { WSS } = require("./wss");

const port = 3000;
const hostname = "0.0.0.0";
const app = express();
const httpServer = createServer(app);
const wsserver = new WebSocket.Server({ server: httpServer });
new WSS(wsserver);


httpServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

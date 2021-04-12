"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dgram_1 = __importDefault(require("dgram"));
var config_1 = __importDefault(require("./config"));
var server = dgram_1.default.createSocket("udp4");
server.on("error", function (err) {
    console.log("server error:\n" + err.stack);
    server.close();
});
server.on("message", function (msg, rinfo) {
    var ack = msg.readInt32LE(0);
    console.log("server got acknum: " + ack + " from " + rinfo.address + ":" + rinfo.port);
});
server.on("listening", function () {
    var address = server.address();
    console.log("server listening " + address.address + ":" + address.port);
});
server.bind(config_1.default.serverPort);

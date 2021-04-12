"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dgram_1 = __importDefault(require("dgram"));
var config_1 = __importDefault(require("./config"));
var packet_1 = require("./packet");
var client = dgram_1.default.createSocket("udp4");
var h = new packet_1.Header(100, 200, config_1.default.flags.FLAG_SPECIAL, 27, true);
console.log(h.asBuffer().readInt32LE(4));
client.send(h.asBuffer(), config_1.default.serverPort, "localhost", function (err) {
    client.close();
});

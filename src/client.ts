import dgram from "dgram";
import config from "./config";
import { Header } from "./packet";
const client = dgram.createSocket("udp4");

const h = new Header(100, 200, config.flags.FLAG_SPECIAL, 27, true);

console.log(h.asBuffer().readInt32LE(4)); // read a 32 bit int, skipping first 4 bytes.

client.send(h.asBuffer(), config.serverPort, "localhost", (err) => {
  client.close();
});

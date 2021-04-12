"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var Header = (function () {
    function Header(ack, seq, flag, rwnd, client) {
        this.ack = ack;
        this.seq = seq;
        this.flag = flag;
        this.rwnd = rwnd;
        this.client = client;
    }
    Header.prototype.asBuffer = function () {
        var ackBuff = Buffer.alloc(4);
        ackBuff.writeInt32LE(this.ack);
        var seqBuff = Buffer.alloc(4);
        seqBuff.writeInt32LE(this.seq);
        return Buffer.concat([ackBuff, seqBuff]);
    };
    return Header;
}());
exports.Header = Header;

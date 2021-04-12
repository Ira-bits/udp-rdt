export class Header {
  ack: number;
  seq: number;
  flag: Buffer;
  rwnd: number;
  client: Boolean;

  constructor(
    ack: number,
    seq: number,
    flag: Buffer,
    rwnd: number,
    client: Boolean
  ) {
    this.ack = ack;
    this.seq = seq;
    this.flag = flag;
    this.rwnd = rwnd;
    this.client = client;
  }

  asBuffer(): Buffer {
    const ackBuff = Buffer.alloc(4);
    ackBuff.writeInt32LE(this.ack);

    const seqBuff = Buffer.alloc(4);
    seqBuff.writeInt32LE(this.seq);

    // ... and so on ...

    return Buffer.concat([ackBuff, seqBuff]);
  }
}

import { writeC, writeS } from '../../../commons/network/base-sendable-packet';

class RequestCharacters {
  constructor(account: string) {
    writeC(0x05);
    writeS(account);
  }
}

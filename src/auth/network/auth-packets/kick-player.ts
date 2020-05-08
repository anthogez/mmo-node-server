import { writeC, writeS } from '../../../commons/network/base-sendable-packet';

class KickPlayer {
  constructor(account: string) {
    writeC(0x04);
    writeS(account);
  }
}

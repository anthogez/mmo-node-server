import { writeC, writeS } from '../../../commons/network/base-sendable-packet';

class PlayerAuthResponse {
  constructor(account: string, response: boolean) {
    writeC(0x03);
    writeS(account);
    writeC(response ? 1 : 0);
  }
}

import {
  writeC,
  writeD,
  writeB,
} from '../../../commons/network/base-sendable-packet';

class PrepareAuth {
  constructor(publicKey: Uint8Array) {
    writeC(0x00);
    writeD(Auth.protocolRev);
    writeD(publicKey.length);
    writeB(publicKey);
  }
}

import { writeC, writeS } from '../../../commons/network/base-sendable-packet';

class ChangePasswordResponse {
  constructor(characterName: string, messageToSend: string) {
    writeC(0x06);
    writeS(characterName);
    writeS(messageToSend);
  }
}

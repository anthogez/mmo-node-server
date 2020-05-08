import { writeC } from '../../../commons/network/base-sendable-packet';

class AuthFail {
  static readonly reasonIpBanned = 1;
  static readonly reasonIpReserved = 2;
  static readonly reasonWrongHexId = 3;
  static readonly reasonIdReserved = 4;
  static readonly reasonNoFreeId = 5;
  static readonly notAuthed = 6;
  static readonly reasonAlreadyLoggedIn = 7;

  constructor(reason: number) {
    writeC(0x01);
    writeC(reason);
  }
}

import { writeC, writeS } from '../../../commons/network/base-sendable-packet';

class AuthResponse {
  constructor(serverId: number) {
    writeC(0x02);
    writeC(serverId);
    writeS('Bartz'); // Let's hard code here for now, TODO create get current server id from db | config
  }
}

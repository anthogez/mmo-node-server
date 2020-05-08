class AccountInfo {
  _login: string;
  _passwordHash: string;
  _accessLevel: number;
  _lastServer: number;

  constructor(
    login: string,
    passwordHash: string,
    accessLevel: number,
    lastServer: number
  ) {
    this._login = login;
    this._passwordHash = passwordHash;
    this._accessLevel = accessLevel;
    this._lastServer = lastServer;
  }

  set login(login: string) {
    this.login = login;
  }

  get login(): string {
    return this._login;
  }

  get accessLevel(): number {
    return this._accessLevel;
  }

  isHashPassword(passwordHash: string): boolean {
    return this._passwordHash === passwordHash;
  }
}

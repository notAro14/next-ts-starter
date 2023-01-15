import type { UserGateway } from "src/core/gateways";
import type { User } from "src/core/models";

export class InMemoryUserGateway implements UserGateway {
  private _users: User[] | null = null;

  public set init(fakeUsers: User[]) {
    this._users = fakeUsers;
  }

  async list() {
    return this._users as User[];
  }
}

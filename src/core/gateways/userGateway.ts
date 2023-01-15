import type { User } from "src/core/models";

export interface UserGateway {
  list(): Promise<User[]>;
}

import type { User } from "src/core/models";
import { InMemoryUserGateway } from "src/adapters/secondary/gateways/inMemoryUserGateway";
import { configureAppStore } from "src/core/store/configureAppStore";

const FAKE_USERS: User[] = [
  { id: "123abc", name: "John Doe", email: "john.doe@email.com" },
];

const userGateway = new InMemoryUserGateway();
userGateway.init = FAKE_USERS;

export const store = configureAppStore({ userGateway });

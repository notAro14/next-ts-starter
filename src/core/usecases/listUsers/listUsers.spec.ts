import { InMemoryUserGateway } from "src/adapters/secondary/gateways/inMemoryUserGateway";
import { AppStore } from "src/core/store";
import type { AppState } from "src/core/store";
import { configureAppStore } from "src/core/store/configureAppStore";
import { listUsers } from "./listUsers";
import { User } from "src/core/models";

const FAKE_USERS: User[] = [
  { id: "123abc", name: "Jane Doe", email: "jane.doe@email.com" },
];

describe("listUsers", () => {
  let store: AppStore;
  let initialState: AppState;
  const userGateway = new InMemoryUserGateway();

  beforeEach(() => {
    userGateway.init = FAKE_USERS;
    store = configureAppStore({ userGateway });
    initialState = store.getState();
  });

  test("no users initially", () => {
    expect(initialState).toEqual<AppState>({
      listUsers: {
        data: null,
        status: "idle",
      },
    });
  });
  test("users are being listed", () => {
    store.dispatch(listUsers());
    expect(store.getState()).toEqual<AppState>({
      listUsers: {
        data: null,
        status: "pending",
      },
    });
  });
  test("users are listed", async () => {
    await store.dispatch(listUsers());
    expect(store.getState()).toEqual<AppState>({
      listUsers: {
        data: FAKE_USERS,
        status: "fulfilled",
      },
    });
  });
});

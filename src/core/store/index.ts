import { ThunkDispatch, Action, Store } from "@reduxjs/toolkit";
import type { UserGateway } from "src/core/gateways";
import type { ListUsersState } from "src/core/usecases/listUsers/listUsers.reducer";

export type Dependencies = Partial<{
  userGateway: UserGateway;
}>;

export interface ThunkExtraArgument {
  dependencies: Dependencies;
}

export type AppDispatch = ThunkDispatch<AppState, ThunkExtraArgument, Action>;

export interface AppState {
  listUsers: ListUsersState;
}

export type AppStore = Store<AppState> & {
  dispatch: AppDispatch;
};

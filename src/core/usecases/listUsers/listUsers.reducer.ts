import { createReducer } from "@reduxjs/toolkit";
import type { User } from "src/core/models";
import { listUsers } from "./listUsers";

export interface ListUsersState {
  data: User[] | null;
  status: "pending" | "idle" | "fulfilled" | "rejected";
}
const initial: ListUsersState = {
  data: null,
  status: "idle",
};
export const listUsersReducer = createReducer(initial, (builder) => {
  builder.addCase(listUsers.pending, (state) => {
    state.data = null;
    state.status = "pending";
  });
  builder.addCase(listUsers.fulfilled, (state, action) => {
    state.data = action.payload;
    state.status = "fulfilled";
  });
});

import type { User } from "src/core/models";
import { createAppAsyncThunk } from "src/core/store/createAppAsyncThunk";

export const listUsers = createAppAsyncThunk<User[], void>(
  "user/listUsers",
  async (_, { extra }) => {
    return extra.dependencies.userGateway?.list() as Promise<User[]>;
  }
);

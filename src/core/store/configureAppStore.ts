import { configureStore } from "@reduxjs/toolkit";
import { listUsersReducer } from "src/core/usecases/listUsers/listUsers.reducer";
import { Dependencies } from ".";

export const configureAppStore = (dependencies: Dependencies) => {
  return configureStore({
    reducer: {
      listUsers: listUsersReducer,
    },
    middleware(gdm) {
      return gdm({
        thunk: {
          extraArgument: {
            dependencies,
          },
        },
      });
    },
  });
};

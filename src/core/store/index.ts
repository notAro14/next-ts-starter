import { configureStore } from "@reduxjs/toolkit";
import type { RootApi } from "./api/rootApi";

export const configureAppStore = (dependencies: Dependencies) => {
  const rootApi = dependencies.rootApi as RootApi;
  return configureStore({
    reducer: {
      [rootApi.reducerPath]: rootApi.reducer,
    },
    middleware(gdm) {
      return gdm({
        thunk: {
          extraArgument: {
            dependencies,
          },
        },
      }).concat(rootApi.middleware);
    },
  });
};
export type Dependencies = Partial<{
  rootApi: RootApi;
}>;
export type AppStore = ReturnType<typeof configureAppStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

import { configureStore } from "@reduxjs/toolkit";
import { RootApi } from "./api/rootApi";
import { ArticleApi } from "./api/articleApi";

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
  articleApi: ArticleApi;
}>;
export type AppStore = ReturnType<typeof configureAppStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export * from "./api/rootApi";

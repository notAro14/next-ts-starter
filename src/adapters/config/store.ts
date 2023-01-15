import { configureAppStore } from "src/core/store";
import { articleApi } from "src/adapters/config/api/articleApi";
import { rootApi } from "src/adapters/config/api/rootApi";

export const store = configureAppStore({
  rootApi,
  articleApi,
});
export const { dispatch } = store;

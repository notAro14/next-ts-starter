import { configureAppStore } from "src/core/store";
import { rootApi } from "src/adapters/config/api/rootApi";
import { articleGateway } from "./gateways/articleGateway";

export const store = configureAppStore({
  rootApi,
  articleGateway,
});
export const { dispatch } = store;

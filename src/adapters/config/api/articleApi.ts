import { makeArticleApi } from "src/core/store/api/articleApi";
import { rootApi } from "src/adapters/config/api/rootApi";

export const articleApi = makeArticleApi(rootApi);

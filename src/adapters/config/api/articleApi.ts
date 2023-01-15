import { makeArticleApi } from "src/core/store/api/articleApi";
import { rootApi } from "src/adapters/config/api/rootApi";
import { articleGateway } from "src/adapters/config/gateways/articleGateway";

export const articleApi = makeArticleApi(articleGateway, rootApi);

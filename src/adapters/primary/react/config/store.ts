import { configureAppStore } from "src/core/store";
import { InMemoryArticleGateway } from "src/adapters/secondary/gateways/inMemoryArticleGateway";
import { makeArticleApi } from "src/core/store/api/articleApi";
import type { Article } from "src/core/entities";
import { makeRootApi } from "src/core/store/api/rootApi";

const FAKE_ARTICLES: Article[] = [
  { id: "456abc", title: "TDD in frontend world" },
  { id: "123abc", title: "Clean architecture in React" },
];

const articleGateway = new InMemoryArticleGateway();
articleGateway.init = FAKE_ARTICLES;

const rootApi = makeRootApi();
export const articleApi = makeArticleApi(articleGateway, rootApi);

export const store = configureAppStore({
  rootApi,
  articleApi,
});

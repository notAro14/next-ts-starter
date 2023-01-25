import { AppState, AppStore, configureAppStore } from "src/core/store";
import { QueryStatus as _QueryStatus } from "@reduxjs/toolkit/dist/query";

import { InMemoryArticleGateway } from "src/adapters/secondary/gateways/inMemoryArticleGateway";
import { ArticleApi, makeArticleApi } from "src/core/store/api/articleApi";
import { RootApi, makeRootApi } from "src/core/store/api/rootApi";
import { retrieveArticles } from "./retrieveArticles";

type QueryStatus = keyof typeof _QueryStatus;

describe("retrieve articles", () => {
  const FAKE_ARTICLES = [{ id: "123abc", title: "Foo Baz Bar" }];
  const ERROR_MESSAGE = "Request for articles failed";
  let articleGateway: InMemoryArticleGateway;
  let rootApi: RootApi;
  let articleApi: ArticleApi;
  let store: AppStore;

  beforeEach(() => {
    articleGateway = new InMemoryArticleGateway();
    articleGateway.init = FAKE_ARTICLES;
    rootApi = makeRootApi();
    store = configureAppStore({ articleGateway, rootApi });
    articleApi = makeArticleApi(rootApi);
  });

  test("there are no articles initially", () => {
    const articlesQuery = articlesSelector(articleApi)(store.getState());
    expect(articlesQuery.status).toEqual<QueryStatus>("uninitialized");
    expect(articlesQuery.data).toBeUndefined();
  });
  test("articles are being retrieved", () => {
    retrieveArticles(articleApi)(store.dispatch);
    const articlesQuery = articlesSelector(articleApi)(store.getState());
    expect(articlesQuery.status).toEqual<QueryStatus>("pending");
  });
  test("articles are retrieved", async () => {
    await retrieveArticles(articleApi)(store.dispatch);
    const articlesQuery = articlesSelector(articleApi)(store.getState());
    expect(articlesQuery.status).toEqual<QueryStatus>("fulfilled");
    expect(articlesQuery.data).toEqual(FAKE_ARTICLES);
  });
  test("articles are not retrieved because of an error", async () => {
    articleGateway.error = new Error(ERROR_MESSAGE);
    await retrieveArticles(articleApi)(store.dispatch);
    const articlesQuery = articlesSelector(articleApi)(store.getState());
    expect(articlesQuery.status).toEqual<QueryStatus>("rejected");
    expect(articlesQuery.error).toEqual(ERROR_MESSAGE);
  });
});

function articlesSelector(articleApi: ArticleApi) {
  return function (state: AppState) {
    return articleApi.endpoints.retrieveArticles.select()(state);
  };
}

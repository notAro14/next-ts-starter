import { AppState, AppStore, configureAppStore } from "src/core/store";
import { QueryStatus as _QueryStatus } from "@reduxjs/toolkit/dist/query";

import { InMemoryArticleGateway } from "src/adapters/secondary/gateways/inMemoryArticleGateway";
import { ArticleApi, makeArticleApi } from "src/core/store/api/articleApi";
import { RootApi, makeRootApi } from "src/core/store/api/rootApi";
import { retrieveArticles as _retrieveArticles } from "./retrieveArticles";

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
    articleApi = makeArticleApi(articleGateway, rootApi);
    store = configureAppStore({ articleApi, rootApi });
  });

  test("there are no articles initially", () => {
    const { status, data } = articlesSelector(store.getState(), articleApi);
    expect(status).toEqual<QueryStatus>("uninitialized");
    expect(data).toBeUndefined();
  });
  test("articles are being retrieved", () => {
    const retrieveArticles = _retrieveArticles(articleApi);
    retrieveArticles(store.dispatch);
    const queryStatus = articlesSelector(store.getState(), articleApi).status;
    expect(queryStatus).toEqual<QueryStatus>("pending");
  });
  test("articles are retrieved", async () => {
    const retrieveArticles = _retrieveArticles(articleApi);
    await retrieveArticles(store.dispatch);
    const { status: queryStatus, data } = articlesSelector(
      store.getState(),
      articleApi
    );
    expect(queryStatus).toEqual<QueryStatus>("fulfilled");
    expect(data).toEqual(FAKE_ARTICLES);
  });
  test("articles are not retrieved because of an error", async () => {
    articleGateway.error = new Error(ERROR_MESSAGE);
    const retrieveArticles = _retrieveArticles(articleApi);
    await retrieveArticles(store.dispatch);
    const { status: queryStatus, error } = articlesSelector(
      store.getState(),
      articleApi
    );
    expect(queryStatus).toEqual<QueryStatus>("rejected");
    expect(error).toEqual(ERROR_MESSAGE);
  });
});

function articlesSelector(state: AppState, articleApi: ArticleApi) {
  return articleApi.endpoints.retrieveArticles.select()(state);
}

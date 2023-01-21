import { configureAppStore, makeRootApi } from "src/core/store";
import { makeArticleApi } from "src/core/store/api/articleApi";
import { InMemoryArticleGateway } from "src/adapters/secondary/inMemoryArticleGateway";
import type { Article } from "src/core/entities/article";

describe("retrieve articles", () => {
  const rootApi = makeRootApi();
  const inMemoryArticleGateway = new InMemoryArticleGateway();
  inMemoryArticleGateway.initialize([{ id: 1, title: "Foo" }]);
  const articleApi = makeArticleApi(rootApi, inMemoryArticleGateway);
  const store = configureAppStore({ rootApi });

  test("initially, there are no articles", () => {
    const articleSelector = articleApi.endpoints.retrieveArticles.select();
    expect(articleSelector(store.getState()).data).toEqual(undefined);
  });

  test("retrieving articles", () => {
    store.dispatch(articleApi.endpoints.retrieveArticles.initiate());
    const articleSelector = articleApi.endpoints.retrieveArticles.select();
    expect(articleSelector(store.getState()).isLoading).toEqual(true);
  });

  test("articles retrieved", async () => {
    await store.dispatch(articleApi.endpoints.retrieveArticles.initiate());
    const articleSelector = articleApi.endpoints.retrieveArticles.select();
    expect(articleSelector(store.getState()).data).toEqual<Article[]>([
      { id: 1, title: "Foo" },
    ]);
  });
});

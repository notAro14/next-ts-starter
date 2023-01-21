import type { RootApi } from "./rootApi";
import type { Article } from "src/core/entities/article";
import type { ArticleGateway } from "src/core/gateways/articleGateway";

export const makeArticleApi = (
  rootApi: RootApi,
  articleGateway: ArticleGateway
) => {
  return rootApi.injectEndpoints({
    endpoints: (build) => {
      return {
        retrieveArticles: build.query<Article[], void>({
          queryFn: async () => {
            const articles = await articleGateway.find();
            return { data: articles };
          },
        }),
      };
    },
  });
};
export type ArticleApi = ReturnType<typeof makeArticleApi>;

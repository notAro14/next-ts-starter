import type { ArticleGateway } from "src/core/ports/gateways";
import type { Article } from "src/core/entities";
import type { RootApi } from "./rootApi";

export const makeArticleApi = (
  articleGateway: ArticleGateway,
  rootApi: RootApi
) =>
  rootApi.injectEndpoints({
    endpoints(build) {
      return {
        retrieveArticles: build.query<Article[], void>({
          providesTags: ["Article"],
          queryFn: async () => {
            const { data, error } = await articleGateway.retrieveAll();
            if (error) return { error: error.message };
            return {
              data,
            };
          },
        }),
      };
    },
  });

export type ArticleApi = ReturnType<typeof makeArticleApi>;

import type { Article } from "src/core/entities";
import type { RootApi } from "./rootApi";
import { Dependencies } from "..";

interface Extra {
  dependencies: Dependencies;
}

export const makeArticleApi = (rootApi: RootApi) =>
  rootApi.injectEndpoints({
    endpoints(build) {
      return {
        retrieveArticles: build.query<Article[], void>({
          providesTags: ["Article"],
          queryFn: async (_, { extra }) => {
            const { dependencies } = extra as Extra;
            if (!dependencies.articleGateway)
              return {
                error: "Article Gateway must be defined",
              };
            const { data, error } =
              await dependencies.articleGateway.retrieveAll();
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

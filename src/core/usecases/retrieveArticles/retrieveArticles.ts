import type { ArticleApi } from "src/core/store/api/articleApi";
import { AppDispatch } from "src/core/store";

export const retrieveArticles =
  (articleApi: ArticleApi) => (dispatch: AppDispatch) => {
    return dispatch(articleApi.endpoints.retrieveArticles.initiate());
  };

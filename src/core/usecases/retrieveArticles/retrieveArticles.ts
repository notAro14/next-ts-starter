import { AppDispatch } from "src/core/store";
import { ArticleApi } from "src/core/store/api/articleApi";

export const retrieveArticles =
  (articleApi: ArticleApi) => (dispatch: AppDispatch) => {
    return dispatch(articleApi.endpoints.retrieveArticles.initiate());
  };

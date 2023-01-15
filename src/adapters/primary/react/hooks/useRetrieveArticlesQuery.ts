import { useEffect } from "react";
import { retrieveArticles } from "src/core/usecases/retrieveArticles/retrieveArticles";
import { useAppSelector } from "./store";
import { articleApi } from "src/adapters/config/api/articleApi";
import { dispatch } from "src/adapters/config/store";

const selectorFn = articleApi.endpoints.retrieveArticles.select();

export const useRetrieveArticles = () => {
  useEffect(() => {
    const { unsubscribe } = retrieveArticles(articleApi)(dispatch);
    return unsubscribe;
  }, []);

  return useAppSelector(selectorFn);
};

import { useEffect } from "react";
import { retrieveArticles } from "src/core/usecases/retrieveArticles/retrieveArticles";
import { useAppDispatch, useAppSelector } from "./store";
import { articleApi } from "src/adapters/config/api/articleApi";

const selectorFn = articleApi.endpoints.retrieveArticles.select();

export const useRetrieveArticles = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { unsubscribe } = retrieveArticles(articleApi)(dispatch);
    return unsubscribe;
  }, [dispatch]);

  return useAppSelector(selectorFn);
};

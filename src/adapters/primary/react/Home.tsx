import { retrieveArticles } from "src/core/usecases/retrieveArticles/retrieveArticles";
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector,
  Provider,
} from "react-redux";
import { makeArticleApi } from "src/core/store/api/articleApi";

import {
  AppDispatch,
  AppState,
  configureAppStore,
  makeRootApi,
} from "src/core/store";
import { JSONPlaceholderArticleGateway } from "src/adapters/secondary/JSONPlaceholderArticleGateway";
import { useEffect } from "react";

const rootApi = makeRootApi();
const inMemoryArticleGateway = new JSONPlaceholderArticleGateway();
const articleApi = makeArticleApi(rootApi, inMemoryArticleGateway);
const store = configureAppStore({ rootApi });

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

const useRetrieveArticlesQuery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    retrieveArticles(articleApi)(dispatch);
  }, [dispatch]);
  return useAppSelector(articleApi.endpoints.retrieveArticles.select());
};

export default function LOLProvider() {
  return (
    <Provider store={store}>
      <Article />
    </Provider>
  );
}

function Article() {
  const { data, isLoading } = useRetrieveArticlesQuery();
  return (
    <>
      {!isLoading && (
        <div>
          {data?.map((d) => (
            <div key={d.id}>
              <h1>{d.title}</h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

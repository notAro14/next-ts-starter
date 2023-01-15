import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "src/adapters/primary/react/hooks/store";
import { retrieveArticles } from "src/core/usecases/retrieveArticles/retrieveArticles";
import { articleApi } from "src/adapters/primary/react/config/store";

const articlesSelector = articleApi.endpoints.retrieveArticles.select();

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { isLoading, data, isError } = useAppSelector(articlesSelector);
  useEffect(() => {
    dispatch(retrieveArticles());
  }, [dispatch]);

  if (isError) return <p role="alert">Failed to get articles</p>;
  if (isLoading) return <p role="progressbar">Loading...</p>;
  if (data)
    return (
      <ul>
        {data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    );

  return null;
}

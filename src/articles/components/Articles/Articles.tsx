import { useRetrieveArticles } from "src/articles/usecases/retrieveArticles/useRetrieveArticlesQuery";

export default function Articles() {
  const { data, error } = useRetrieveArticles();

  if (error) return <Failed />;
  if (!data) return <Loading />;
  return (
    <ul>
      {data.map((a) => {
        return <li key={a.id}>{a.title}</li>;
      })}
    </ul>
  );
}

const Failed = () => <p role="alert">Failed to get articles</p>;
const Loading = () => <p role="progressbar">Loading...</p>;

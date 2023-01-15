import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "src/adapters/primary/react/hooks/store";
import { listUsers } from "src/core/usecases/listUsers";

export default function HomePage() {
  const { data, status } = useAppSelector((state) => state.listUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  if (status === "pending" || status === "idle")
    return <p role="progressbar">Loading...</p>;

  if (data)
    return (
      <ul>
        {data.map((u) => (
          <li key={u.id}>
            <p>{u.name}</p>
            <small>{u.email}</small>
          </li>
        ))}
      </ul>
    );

  return null;
}

import type { Article } from "src/core/entities";

type Response<T> =
  | {
      data: T;
      error: null;
    }
  | {
      error: Error;
      data: null;
    };

type AsyncResponse<T> = Promise<Response<T>>;

export interface ArticleGateway {
  retrieveAll(): AsyncResponse<Article[]>;
}

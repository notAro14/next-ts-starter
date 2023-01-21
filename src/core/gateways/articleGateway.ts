import { Article } from "src/core/entities/article";

export interface ArticleGateway {
  find: () => Promise<Article[]>;
}

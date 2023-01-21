import { Article } from "src/core/entities/article";
import { ArticleGateway } from "src/core/gateways/articleGateway";

export class InMemoryArticleGateway implements ArticleGateway {
  private _articles: Article[] | null = null;

  initialize(articles: Article[]) {
    this._articles = articles;
  }

  async find() {
    return this._articles as Article[];
  }
}

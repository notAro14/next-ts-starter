import { Article } from "src/core/entities/article";
import { ArticleGateway } from "src/core/gateways/articleGateway";

export class JSONPlaceholderArticleGateway implements ArticleGateway {
  async find() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    return data as Article[];
  }
}

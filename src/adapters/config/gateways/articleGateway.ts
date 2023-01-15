// import { InMemoryArticleGateway } from "src/adapters/secondary/gateways/inMemoryArticleGateway";
// import type { Article } from "src/core/entities";
import { ProdArticleGateway } from "src/adapters/secondary/gateways/prodArticleGateway";

// const FAKE_ARTICLES: Article[] = [
//   { id: "456abc", title: "TDD in frontend world" },
//   { id: "123abc", title: "Clean architecture in React" },
// ];

// export const articleGateway = new InMemoryArticleGateway();
// articleGateway.init = FAKE_ARTICLES;
export const articleGateway = new ProdArticleGateway();

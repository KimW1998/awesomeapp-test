import { useState, useEffect } from "react";
import ArticleCard, { Article } from "./ArticleCard";
import axios from "axios";
import Timeout from "await-timeout";

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>();

  type apiArticle = {
    id: Number;
    title: string;
    body: string;
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // fake waiting..
      await Timeout.set(2000);

      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("Got back:", res);

      setArticles(
        res.data.map((apiArticle: apiArticle) => {
          return {
            id: apiArticle.id,
            title: apiArticle.title,
            content: apiArticle.body,
          };
        })
      );
    }

    doSomeDataFetching();
  }, [setArticles]);

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles ? (
        articles.map((article) => {
          return <ArticleCard article={article} />;
        })
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
}

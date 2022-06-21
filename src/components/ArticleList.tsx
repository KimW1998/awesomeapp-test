import { useState, useEffect } from "react";
import ArticleCard, { Article } from "./ArticleCard";
import axios from "axios";
import Timeout from "await-timeout";
import { stringify } from "querystring";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  type apiArticle = {
    id: Number;
    title: string;
    body: string;
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
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
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </div>
  );
}

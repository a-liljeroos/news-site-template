import React from "react";
import Sivuovi from "../Ads/Sivuovi/Sivuovi";
import ArticleBoxStandard from "./ArticleBoxStandard";
import "./ArticleBrowser.scss";
import { articles } from "../../data/Index";

const PolitiikkaArticleBrowser = () => {
  const politiikkaArticles = articles.filter((article) => {
    if (article.genre.toLowerCase() === "politiikka") {
      return true;
    }
  });
  return (
    <div className="article-browser">
      {politiikkaArticles
        .filter((article, index) => {
          if (index > 2) {
            return false;
          }
          return true;
        })
        .map((article) => (
          <ArticleBoxStandard {...article} />
        ))}
      <Sivuovi />
    </div>
  );
};

export default PolitiikkaArticleBrowser;

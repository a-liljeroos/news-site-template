import React from "react";
import Sivuovi from "../Ads/Sivuovi/Sivuovi";
import ArticleBoxStandard from "./ArticleBoxStandard";
import "./ArticleBrowser.scss";
import { articles } from "../../data/Index";
import Zalanna from "../Ads/Zalanna/Zalanna";

const ViihdeArticleBrowser = () => {
  const viihdeArticles = articles.filter((article) => {
    if (article.genre.toLowerCase() === "viihde") {
      return true;
    }
  });
  return (
    <div className="article-browser">
      {viihdeArticles
        .filter((article, index) => {
          if (index > 2) {
            return false;
          }
          return true;
        })
        .map((article, index) => (
          <ArticleBoxStandard {...article} key={index} />
        ))}

      <Zalanna />
    </div>
  );
};

export default ViihdeArticleBrowser;

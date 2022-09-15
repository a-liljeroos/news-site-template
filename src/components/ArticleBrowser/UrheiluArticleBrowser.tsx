import React from "react";

import ArticleBoxStandard from "./ArticleBoxStandard";
import "./ArticleBrowser.scss";
import { articles } from "../../data/Index";
import Zalanna from "../Ads/Zalanna/Zalanna";

const UrheiluArticleBrowser = () => {
  const urheiluArticles = articles.filter((article) => {
    if (article.genre.toLowerCase() === "urheilu") {
      return true;
    }
  });
  window.scrollTo(0, 0);
  return (
    <div className="article-browser">
      {urheiluArticles
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

export default UrheiluArticleBrowser;

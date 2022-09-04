import React, { useEffect } from "react";
import "./NewsArticle.scss";
import AuthorInfo from "./AuthorInfo";
import { useParams } from "react-router-dom";
import { articles } from "../../data/Index";
import Zalanna from "../Ads/Zalanna/Zalanna";

const NewsArticle = () => {
  const articleId = useParams();
  const article = articles.filter((article) => {
    if (article["artice-id"] === Object.values(articleId)[0]) {
      return true;
    }
    return false;
  })[0];
  const articleImage = require(`../ArticleBrowser/images/${article.images.image.url}`);

  window.scrollTo(0, 0);
  return (
    <div className="news-article">
      <article>
        <h4 className="article-genre">
          UUTISET | {article.genre.toUpperCase()}
        </h4>
        <h3 className="article-title">{article.article.title}</h3>
        <h4 className="article-lead">{article.article.lead}</h4>
        <div className="article-image-container">
          <img className="article-image" src={articleImage} alt="image" />
          <div className="caption-text">{article.images.image.image_text}</div>
        </div>
        <AuthorInfo
          writerId={article["writer-id"]}
          published={article.published}
        />
        <hr />
        <div className="article-body">
          {article.article.paragraphs.map((paragraph) => (
            <p className="paragraph">{paragraph}</p>
          ))}
        </div>
        <div className="article-tags">
          {article["topic-tags"].map((tag) => (
            <h4 className="article-tag">{tag.toUpperCase()}</h4>
          ))}
        </div>
      </article>
      <hr />
      <Zalanna />
    </div>
  );
};

export default NewsArticle;

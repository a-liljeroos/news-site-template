import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../data/Index";

const ArticleBoxStandard = (articleInfo: Article) => {
  const imageSource = require(`./images/${articleInfo.images.image.url}`);

  return (
    <Link to={`/news-site-template/artikkeli/${articleInfo["artice-id"]}`}>
      <div className="article-box-standard">
        <img className="article-box-image" src={imageSource} alt="" />
        <h2 className="article-box-title">{articleInfo.article.title}</h2>
        <div className="article-box-info">
          {articleInfo.genre} - {articleInfo.edited.editTime}
        </div>
      </div>
    </Link>
  );
};

export default ArticleBoxStandard;

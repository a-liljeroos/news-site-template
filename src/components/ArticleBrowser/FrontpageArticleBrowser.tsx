import Sivuovi from "../Ads/Sivuovi/Sivuovi";
import ArticleBoxStandard from "./ArticleBoxStandard";
import "./ArticleBrowser.scss";
import { articles, Article } from "../../data/Index";
import Zalanna from "../Ads/Zalanna/Zalanna";

const FrontpageArticleBrowser = () => {
  var allArticles = articles;

  const shuffleArticles = (array: Article[]) => {
    var m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };

  shuffleArticles(allArticles);

  return (
    <div className="article-browser">
      {allArticles
        .filter((article, index) => {
          if (index > 2) {
            return false;
          }
          return true;
        })
        .map((article, key) => (
          <ArticleBoxStandard {...article} key={key} />
        ))}
      <Sivuovi />
      {allArticles
        .filter((article, index) => {
          if (index <= 2) {
            return false;
          }
          return true;
        })
        .map((article, key) => (
          <ArticleBoxStandard {...article} key={key} />
        ))}
      <Zalanna />
    </div>
  );
};

export default FrontpageArticleBrowser;
